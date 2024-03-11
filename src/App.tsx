import {
  AppRoot,
  View,
  Panel,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import groups from './groups.json'
import { GroupItem } from './components/GroupItem';
import { Filter } from './components/Filter';
import { useState } from 'react';

const App = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [filterParams, setFilterParams] = useState({})

    const updateFilter = (name: any, value: any) => {
        setFilterParams({...filterParams, [name]: value})
    }

    const search = () => {
        console.log(filterParams)
    }


    const avatarColors: any[] = [...new Set(groups.map(group => group.avatar_color).filter(i => !!i))]

    return (
        <AppRoot>
            <View activePanel='groupsSection'>
                <Panel id="groupsSection">
                    <Filter avatarColors={avatarColors} updateFilter={updateFilter} search={search}/>
                    {groups.map(group => <GroupItem {...group} key={group.id}/>)}
                </Panel>
            </View>
        </AppRoot>
    );
};

export default App