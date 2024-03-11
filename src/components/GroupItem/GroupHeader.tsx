import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { GroupHeaderType } from "../../type";
import { InitialsAvatarTextGradients } from "@vkontakte/vkui/dist/components/Avatar/Avatar";

export const GroupHeader = ({name, avatar_color}: GroupHeaderType) => {
    const initials = name.split(' ').map(i => i[0]).join('').toUpperCase()    

return  <SimpleCell  before={<Avatar size={100} src="#" initials={initials} gradientColor={avatar_color as InitialsAvatarTextGradients} />}
                    subtitle={closed ? 'закрытая' : 'открытая'}
        >
            {name}
        </SimpleCell>
}