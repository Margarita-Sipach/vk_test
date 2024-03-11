import { GroupType } from "../../type"
import {
    Group
} from '@vkontakte/vkui';
import { GroupTabs } from "./GroupTabs";
import { GroupHeader } from "./GroupHeader";

export const GroupItem = ({id, ...group}: GroupType) => {
    return (
        <Group id={String(id)}>
            <GroupHeader {...group}/>
            <GroupTabs {...group}/>      
        </Group>
    )  
}