import { FormItem, Select } from "@vkontakte/vkui";

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

const ALL_COLORS = 'all'

export const ColorSelect = ({avatarColors}: {avatarColors: string[]}) => {

    const getColorOption = (color: string) => ({
        value: color,
        label: ColorLabels?.[color as keyof typeof ColorLabels] || color,
    })

    return <FormItem htmlFor="color-select-id"
                     top="Выберите цвет группы"
            >
                <Select id="color-select-id"
                        // onChange={onChange}
                        value={ALL_COLORS}
                        name="color"
                        required
                        options={[ALL_COLORS, ...avatarColors].map(getColorOption)}
                />
            </FormItem>
}