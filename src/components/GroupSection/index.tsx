import { useContext } from "react"
import { Context } from "../../App"
import { Div, Spinner } from "@vkontakte/vkui"
import { GroupItem } from "../GroupItem"

export const GroupSection = () => {
    const {loading, groups} = useContext(Context)
    return loading ? <Spinner/> 
            :  groups.result && groups.data?.length ? groups?.data?.map(group => <GroupItem {...group} key={group.id}/>)
            : <Div>Нет данных</Div>
}