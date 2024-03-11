import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import groups from './groups.json'
import { GroupItem } from './components/GroupItem';

const App = () => {
    return (
        <AppRoot>
            <View activePanel='groupsSection'>
                <Panel id="groupsSection">
                    <PanelHeader>

                    </PanelHeader>
                    {groups.map(group => <GroupItem {...group} key={group.id}/>)}
                </Panel>
            </View>
        </AppRoot>
    );
};

export default App