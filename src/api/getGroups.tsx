import { GetGroupsResponse, GroupType } from "../type";
import { FilterParams } from "../components/Filter";
import { FriendValues } from "../components/Filter/FriendSelect";
import { TypeValues } from "../components/Filter/TypeSelect";
import { ALL_ITEMS } from "../components/Filter/FilterSelect";
import initGroups from "../groups.json";

export const isResponseSuccess = ({ data, result }: GetGroupsResponse) =>
    result && data?.length;

const filterByType = (groups: GroupType[], param: TypeValues) => {
    return groups.filter(
        (group) =>
            (param === TypeValues.closed && group.closed) ||
            (param === TypeValues.opened && !group.closed)
    );
};

const filterByColor = (groups: GroupType[], param: string) => {
    return groups.filter((group) => group.avatar_color === param);
};

const filterByFriend = (groups: GroupType[], param: FriendValues) => {
    return groups.filter(
        (group) =>
            (param === FriendValues.yes && group.friends) ||
            (param === FriendValues.no && !group.friends)
    );
};

type FilterBy<T> = (groups: GroupType[], param: T) => GroupType[];

const filterByParam = <T,>(groups: GroupType[], param: T, clb: FilterBy<T>) => {
    if (param === ALL_ITEMS) return groups;
    return clb(groups, param);
};

const filterGroups = (groups: GroupType[], params: FilterParams) => {
    groups = filterByParam<TypeValues>(groups, params.type, filterByType);
    groups = filterByParam<string>(groups, params.color, filterByColor);
    groups = filterByParam<FriendValues>(groups, params.friend, filterByFriend);
    return groups;
};

export const getGroupsResponse = (
    params: FilterParams
): Promise<GetGroupsResponse> => {
    const result = 1;
    const data = filterGroups(initGroups, params);

    return new Promise((resolve) => {
        try {
            const id = setTimeout(() => {
                if (!result && !data) throw new Error("Нет данных");
                clearTimeout(id);
                resolve({ result, data });
            }, 1000);
        } catch (e) {
            resolve({ result });
        }
    });
};
