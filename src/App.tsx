import {
  AppRoot,
  View,
  Panel,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import groups from './groups.json'
import { GroupItem } from './components/GroupItem';
import { Filter } from './components/Filter';

const App = () => {
    const avatarColors: any[] = [...new Set(groups.map(group => group.avatar_color).filter(i => !!i))]
    return (
        <AppRoot>
            <View activePanel='groupsSection'>
                <Panel id="groupsSection">
                    <Filter avatarColors={avatarColors}/>
                    {groups.map(group => <GroupItem {...group} key={group.id}/>)}
                </Panel>
            </View>
        </AppRoot>
    );
};

export default App