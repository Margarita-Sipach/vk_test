import { FormItem, Select } from "@vkontakte/vkui";

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

export const TypeSelect = () => {

    const getTypeOption = (type: TypeValues) => ({
        value: type,
        label: TypeLabels?.[type],
    })

return<FormItem
    htmlFor="type-select-id"
    top="Выберите тип группы"
  >
    <Select
      id="type-select-id"
      // onChange={onChange}
      value={TypeValues.all}
      name="type"
      required
      options={Object.values(TypeValues).map(getTypeOption)}
    />
  </FormItem>}