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
    interface FilterParams{
        [FilterSelectsNames.type]: TypeValues
        [FilterSelectsNames.color]: string
        [FilterSelectsNames.friend]: FriendValues
    }

    const initFilterParams: FilterParams = Object.fromEntries(Object.values(FilterSelectsNames).map(i => [i, ALL_ITEMS])) as unknown as FilterParams
    const avatarColors: string[] = [...new Set(groups.map(group => group.avatar_color || '').filter(i => i))]

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<GetGroupsResponse>({result: 0});
    const [filterParams, setFilterParams] = useState(initFilterParams)

    const filterByType = (groups: GroupType[], param: TypeValues) => {
        return groups.filter(group => param === TypeValues.closed && group.closed || param === TypeValues.opened && !group.closed)
    }

    const filterByColor = (groups: GroupType[], param: string) => {
        return groups.filter(group => group.avatar_color === param)
    }

    const filterByFriend = (groups: GroupType[], param: FriendValues) => {
        return groups.filter(group => param === FriendValues.yes && group.friends || param === FriendValues.no && !group.friends)
    }

    type FilterBy<T, > = (groups: GroupType[], param: T) => GroupType[]

    const filterByParam = <T, >(groups: GroupType[], param: T, clb: FilterBy<T>) => {
        if(param === ALL_ITEMS) return groups
        return clb(groups, param)
    }

    const filterGroups = (groups: GroupType[], params: FilterParams) => {
        groups = filterByParam<TypeValues>(groups, params.type, filterByType)
        groups = filterByParam<string>(groups, params.color, filterByColor)
        groups = filterByParam<FriendValues>(groups, params.friend, filterByFriend)
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
            if(e instanceof Error) setError(e.message)
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