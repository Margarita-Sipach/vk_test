import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { GroupHeaderType } from "../../type";
import { InitialsAvatarTextGradients } from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import { TypeLabels } from "../Filter/TypeSelect";
import { memo } from "react";

export const GroupHeader = memo(({name, avatar_color, closed}: GroupHeaderType) => {
    const initials = name.split(' ').map(i => i[0]).join('').toUpperCase() 
    const AvatarCell = () => <Avatar size={100} 
                                     src="#" 
                                     initials={initials} 
                                     gradientColor={avatar_color as InitialsAvatarTextGradients} 
                            />

    return  <SimpleCell before={<AvatarCell/>} 
                        subtitle={TypeLabels[closed ? 'closed' : 'opened']}
            >
                {name}
            </SimpleCell>
})