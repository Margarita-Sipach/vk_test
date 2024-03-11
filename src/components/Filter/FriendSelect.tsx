import { FilterSelect } from "./FilterSelect";

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

export const FriendSelect = ({updateFilter}: any) => {

    const getFriendOption = (friend: keyof typeof FriendLabels) => ({
        value: friend,
        label: FriendLabels?.[friend],
    })

    return <FilterSelect name="friend"
                        title="Есть ли друзья"
                        items={Object.values(FriendValues)}
                        getOption={getFriendOption}
                        onChange={updateFilter}
                />
}