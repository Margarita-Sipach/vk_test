import { CustomSelectOptionInterface, FormItem, Select } from "@vkontakte/vkui";
import { ChangeEvent, useContext, useState } from "react";
import { FilterSelectsNames } from ".";
import { Context } from "../../App";

export const ALL_ITEMS = 'all'

interface FilterSelectProps{
    items: string[],
    title: string,
    name: FilterSelectsNames,
    getOption: (item: any) => CustomSelectOptionInterface
}


export const FilterSelect = ({items, title, name, getOption}: FilterSelectProps) => {
    const [value, setValue] = useState(ALL_ITEMS);

    const {updateFilter} = useContext(Context)
    
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target?.value)
        updateFilter(name, e.target?.value)
    }

    return <FormItem htmlFor={`${name}-select-id`}
                     top={title}
            >
                <Select id={`${name}-select-id`}
                        onChange={handleChange}
                        value={value}
                        name={name}
                        required
                        options={items.map(getOption)}
                />
            </FormItem>
}