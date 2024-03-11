import { CustomSelectOptionInterface, FormItem, Select } from "@vkontakte/vkui";
import { useState } from "react";

export const ALL_ITEMS = 'all'

interface FilterSelectProps{
    items: string[],
    title: string,
    name: string,
    onChange: any,
    getOption: (item: any) => CustomSelectOptionInterface
}


export const FilterSelect = ({items, title, name, onChange, getOption}: FilterSelectProps) => {
    const [value, setValue] = useState(ALL_ITEMS);
    
    const handleChange = (e: any) => {
        setValue(e.target.value)
        onChange(name, e.target.value)
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