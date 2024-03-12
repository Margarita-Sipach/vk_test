import { Button, FormItem } from "@vkontakte/vkui";
import { TypeSelect, TypeValues } from "./TypeSelect";
import { ColorSelect } from "./ColorSelect";
import { FriendSelect, FriendValues } from "./FriendSelect";
import { memo, useContext } from "react";
import { Context } from "../../App";
import { getGroupsResponse } from "../../api/getGroups";

export interface FilterParams {
  [FilterSelectsNames.type]: TypeValues;
  [FilterSelectsNames.color]: string;
  [FilterSelectsNames.friend]: FriendValues;
}

export enum FilterSelectsNames {
  color = "color",
  friend = "friend",
  type = "type",
}

export const Filter = memo(() => {
    const { filterParams, setLoading, setGroups } = useContext(Context);

    const search = () => {
        setLoading(true);
        getGroupsResponse(filterParams).then((data) => {
            setGroups(data);
            setLoading(false);
        });
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <TypeSelect />
            <ColorSelect />
            <FriendSelect />
            <FormItem>
                <Button type="submit" size="l" onClick={search} stretched>
                    Искать
                </Button>
            </FormItem>
        </form>
    );
});
