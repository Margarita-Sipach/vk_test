import { FilterSelect } from "./FilterSelect";

enum TypeValues{
    all = 'all',
    opened = 'opened',
    closed = 'closed'
}

const TypeLabels = {
    [TypeValues.all]: 'Все',
    [TypeValues.closed]: 'Открытая',
    [TypeValues.opened]: 'Закрытая'
}

export const TypeSelect = ({updateFilter}: any) => {

    const getTypeOption = (type: TypeValues) => ({
        value: type,
        label: TypeLabels?.[type],
    })

return <FilterSelect title="Выберите тип группы"
name="type"
items={Object.values(TypeValues)}
getOption={getTypeOption} onChange={updateFilter}    />
  }