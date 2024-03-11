import { FormItem, Select } from "@vkontakte/vkui";

enum FriendValues{
    all = 'all',
    yes = 'yes',
    no = 'no'
}

const FriendLabels = {
    [FriendValues.all]: 'Все',
    [FriendValues.yes]: 'Есть',
    [FriendValues.no]: 'Нету'
}

const ALL_COLORS = 'all'

export const FriendSelect = () => {

    const getFriendOption = (friend: keyof typeof FriendLabels) => ({
        value: friend,
        label: FriendLabels?.[friend],
    })

    return <FormItem htmlFor="friend-select-id"
                     top="Есть ли друзья"
            >
                <Select id="friend-select-id"
                        // onChange={onChange}
                        value={ALL_COLORS}
                        name="friend"
                        required
                        options={Object.values(FriendValues).map(getFriendOption)}
                />
            </FormItem>
}