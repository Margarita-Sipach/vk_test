import { FilterSelectsNames } from ".";
import { UpdateFilter } from "../../type";
import { ALL_ITEMS, FilterSelect } from "./FilterSelect";

enum ColorLabels{
    all = "Все",
    red = "Красный",
    green = "Зеленый",
    yellow = "Желтый",
    blue = "Синий",
    purple = "Фиолетовый",
    white = "Белый",
    orange = "Оранжевый",
}

interface ColorSelectProps{
    updateFilter: UpdateFilter
    avatarColors: string[]
}

export const ColorSelect = ({avatarColors, updateFilter}: ColorSelectProps) => {

    const getColorOption = (color: string) => ({
        value: color,
        label: ColorLabels?.[color as keyof typeof ColorLabels] || color,
    })

    return <FilterSelect title="Выберите цвет группы" 
                        onChange={updateFilter}
                        name={FilterSelectsNames.color} 
                        getOption={getColorOption}
                        items={[ALL_ITEMS, ...avatarColors]}
            />
}