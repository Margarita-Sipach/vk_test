import { CustomSelectOptionInterface, FormItem, Select } from "@vkontakte/vkui";
import { useState } from "react";

const ALL_ITEMS = 'all'

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
        const value = e.target.value
        setValue(value)
        onChange(name, value)
    }
    return <FormItem htmlFor={`${name}-select-id`}
                     top={title}
            >
                <Select id={`${name}-select-id`}
                        onChange={handleChange}
                        value={value}
                        name={name}
                        required
                        options={[ALL_ITEMS, ...items].map(getOption)}
                />
            </FormItem>
}