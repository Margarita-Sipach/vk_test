import { Button, FormItem } from "@vkontakte/vkui";
import { TypeSelect } from "./TypeSelect";
import { ColorSelect } from "./ColorSelect";
import { FriendSelect } from "./FriendSelect";
import { useState } from "react";

interface FilterProps{
  updateFilter: any
  avatarColors: string[]
  search: any
}

export const Filter = ({avatarColors, updateFilter, search}: FilterProps) => {
  return (
          <form onSubmit={(e) => e.preventDefault()}> 
            <TypeSelect updateFilter={updateFilter}/>
            <ColorSelect updateFilter={updateFilter} avatarColors={avatarColors}/>
            <FriendSelect updateFilter={updateFilter} />
            <FormItem>
              <Button type="submit" size="l" onClick={search} stretched>Искать</Button>
            </FormItem>
          </form>
)}