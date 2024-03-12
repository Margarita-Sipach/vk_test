import {
  AppRoot,
  View,
  Panel,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import { Filter, FilterParams, FilterSelectsNames } from './components/Filter';
import { createContext, useEffect, useState } from 'react';
import { GetGroupsResponse } from './type';
import { ALL_ITEMS } from './components/Filter/FilterSelect';
import { getGroupsResponse } from './api/getGroups';
import { GroupSection } from './components/GroupSection';

interface ContextType{
    filterParams: FilterParams,
    updateFilter: (name: FilterSelectsNames, value: string) => void,
    groups: GetGroupsResponse,
    setGroups: (i: GetGroupsResponse) => void,
    loading: boolean,
    setLoading: (i: boolean) => void,
    colors: string[]
}

export const Context = createContext<ContextType>({} as ContextType);

const App = () => {
    const initFilterParams: FilterParams = Object.fromEntries(Object.values(FilterSelectsNames).map(i => [i, ALL_ITEMS])) as unknown as FilterParams

    const [filterParams, setFilterParams] = useState(initFilterParams);
    const [groups, setGroups] = useState<GetGroupsResponse>({result: 0});
    const [colors, setColors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getGroupsResponse(filterParams).then(groups => {
            setGroups(groups)
            groups.result && groups.data && setColors([...new Set(groups.data.map(group => group.avatar_color || '').filter(i => i))])
            setLoading(false)
        })
    }, [])

    const updateFilter = (name: FilterSelectsNames, value: string) => {
        setFilterParams({...filterParams, [name]: value})
    }

    const initContext = {
        filterParams,
        updateFilter,
        groups,
        setGroups,
        loading, 
        setLoading,
        colors
    }

    return (
        <Context.Provider value={initContext}>
            <AppRoot>
                <View activePanel='groupsSection'>
                    <Panel id="groupsSection">
                        <Filter/>
                        <GroupSection/>
                    </Panel>
                </View>
            </AppRoot>
        </Context.Provider>
    );
};

export default App