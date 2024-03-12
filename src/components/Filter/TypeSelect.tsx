import { memo } from "react";
import { FilterSelectsNames } from ".";
import { FilterSelect } from "./FilterSelect";

export enum TypeValues{
    all = 'all',
    opened = 'opened',
    closed = 'closed'
}

export const TypeLabels = {
    [TypeValues.all]: 'Все',
    [TypeValues.closed]: 'Закрытая',
    [TypeValues.opened]: 'Открытая'
}

export const TypeSelect = memo(() => {

    const getTypeOption = (type: TypeValues) => ({
        value: type,
        label: TypeLabels?.[type],
    })

    return <FilterSelect title="Выберите тип группы"
                    name={FilterSelectsNames.type}
                    items={Object.values(TypeValues)}
                    getOption={getTypeOption} 
        />
  })