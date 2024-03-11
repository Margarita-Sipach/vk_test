import { FilterSelect } from "./FilterSelect";

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

export const ColorSelect = ({avatarColors, updateFilter}: any) => {

    const getColorOption = (color: string) => ({
        value: color,
        label: ColorLabels?.[color as keyof typeof ColorLabels] || color,
    })

    return <FilterSelect title="Выберите цвет группы" 
                        onChange={updateFilter}
                        name="color" 
                        getOption={getColorOption}
                        items={avatarColors}
            />
}