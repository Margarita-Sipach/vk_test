import {
  AppRoot,
  View,
  Panel,
  Spinner,
  Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import groups from './groups.json'
import { GroupItem } from './components/GroupItem';
import { Filter, FilterSelectsNames } from './components/Filter';
import { useEffect, useState } from 'react';
import { GetGroupsResponse, GroupType } from './type';
import { ALL_ITEMS } from './components/Filter/FilterSelect';
import { TypeValues } from './components/Filter/TypeSelect';
import { FriendValues } from './components/Filter/FriendSelect';

const App = () => {
    const initFilterParams = Object.fromEntries(Object.values(FilterSelectsNames).map(i => [i, ALL_ITEMS]))
    const avatarColors: any[] = [...new Set(groups.map(group => group.avatar_color).filter(i => !!i))]

    type FilterParams = Record<FilterSelectsNames, any>

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<GetGroupsResponse>({result: 0});
    const [filterParams, setFilterParams] = useState<FilterParams>(initFilterParams as FilterParams)

    const filterByType = (groups: GroupType[], param: TypeValues) => {
        console.log(groups.filter(group => param === TypeValues.closed && group.closed || param === TypeValues.opened && !group.closed)
        )
        return groups.filter(group => param === TypeValues.closed && group.closed || param === TypeValues.opened && !group.closed)
    }

    const filterByColor = (groups: GroupType[], param: typeof avatarColors) => {
        return groups.filter(group => group.avatar_color === param as any)
    }

    const filterByFriend = (groups: GroupType[], param: FriendValues) => {
        return groups.filter(group => param === FriendValues.yes && group.friends || param === FriendValues.no && !group.friends)
    }

    const filterByParam = (groups: GroupType[], param: TypeValues | FriendValues | typeof avatarColors, clb: any) => {
        if(param === ALL_ITEMS) return groups
        return clb(groups, param)
    }

    const filterGroups = (groups: GroupType[], params: FilterParams) => {
        groups = filterByParam(groups, params.type, filterByType)
        groups = filterByParam(groups, params.color, filterByColor)
        groups = filterByParam(groups, params.friend, filterByFriend)
        return groups
    }

    const getGroupsResponse = (groups: GroupType[], params: FilterParams) => {
        const result = 1;
        const data = filterGroups(groups, params)
        try{
            setLoading(true)
        
            const id = setTimeout(() => {
                if(!result && !data) throw new Error("Нет данных")
                setData({result, data})
                setLoading(false)
                clearTimeout(id)
            }, 1000)

        }catch(e){
            setError(e as any)
            setLoading(false)
        }
        
    }

    useEffect(() => {
        getGroupsResponse(groups, filterParams)
    }, [])

    const updateFilter = (name: FilterSelectsNames, value: string) => {
        setFilterParams({...filterParams, [name]: value})
    }

    const search = () => {
        getGroupsResponse(groups, filterParams)
    }



    return (
        <AppRoot>
            <View activePanel='groupsSection'>
                <Panel id="groupsSection">
                    <Filter avatarColors={avatarColors} updateFilter={updateFilter} search={search}/>
                    {
                        loading ? <Spinner/> 
                        : error ? <Div>{error}</Div>
                        : data?.data?.length ? data?.data?.map(group => <GroupItem {...group} key={group.id}/>)
                        : <Div>Нет данных</Div>
                    }
                </Panel>
            </View>
        </AppRoot>
    );
};

export default App