import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { GroupHeaderType } from "../../type";
import { InitialsAvatarTextGradients } from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import { TypeLabels } from "../Filter/TypeSelect";
import { memo } from "react";

const gradientColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

export const GroupHeader = memo(
    ({ name, avatar_color, closed }: GroupHeaderType) => {
        const isGradientColor = avatar_color && gradientColors.includes(avatar_color)
        const initials = name
            .split(" ")
            .map((i) => i[0])
            .join("")
            .toUpperCase();
        const AvatarCell = () => (
            <Avatar
                size={100}
                src="#"
                initials={initials}
                gradientColor={!avatar_color || isGradientColor ? avatar_color as InitialsAvatarTextGradients : 'custom'}
                style={!isGradientColor && {background: avatar_color} || {}}
            />
        );

        return (
            <SimpleCell
                before={<AvatarCell />}
                subtitle={TypeLabels[closed ? "closed" : "opened"]}
            >
                {name}
            </SimpleCell>
        );
    }
);
