import { GroupType } from "../../type";
import { Group } from "@vkontakte/vkui";
import { GroupTabs } from "./GroupTabs";
import { GroupHeader } from "./GroupHeader";
import { memo } from "react";

export const GroupItem = memo(({ id, ...group }: GroupType) => {
    return (
        <Group id={String(id)}>
            <GroupHeader {...group} />
            <GroupTabs {...group} />
        </Group>
    );
});
