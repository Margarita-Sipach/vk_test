import { memo } from "react";
import { FilterSelectsNames } from ".";
import { FilterSelect } from "./FilterSelect";

export enum FriendValues{
    all = 'all',
    yes = 'yes',
    no = 'no'
}

const FriendLabels = {
    [FriendValues.all]: 'Все',
    [FriendValues.yes]: 'Есть',
    [FriendValues.no]: 'Нету'
}

export const FriendSelect = memo(() => {

    const getFriendOption = (friend: keyof typeof FriendLabels) => ({
        value: friend,
        label: FriendLabels?.[friend],
    })

    return <FilterSelect name={FilterSelectsNames.friend}
                        title="Есть ли друзья"
                        items={Object.values(FriendValues)}
                        getOption={getFriendOption}
                />
})