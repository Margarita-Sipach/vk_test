import { useContext } from "react";
import { FilterSelectsNames } from ".";
import { ALL_ITEMS, FilterSelect } from "./FilterSelect";
import { Context } from "../../App";

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

export const ColorSelect = () => {
    const {colors} = useContext(Context)

    const getColorOption = (color: string) => ({
        value: color,
        label: ColorLabels?.[color as keyof typeof ColorLabels] || color,
    })

    return <FilterSelect title="Выберите цвет группы" 
                        name={FilterSelectsNames.color} 
                        getOption={getColorOption}
                        items={[ALL_ITEMS, ...colors]}
            />
}