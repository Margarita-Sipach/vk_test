import { Card, CardGrid, Div, Tabs, TabsItem } from "@vkontakte/vkui"
import { GroupTabsType, UserType } from "../../type"
import { useState } from "react"

interface FriendsType{
    selected: boolean
    setSelected: any
    friends?: UserType[]
}

export const Friends = ({selected, setSelected, friends} : FriendsType) => (
    friends?.length &&  <TabsItem selected={selected}
                                id="tab-friends"
                                aria-controls="tab-content-friends"
                                onClick={() => setSelected((prev: boolean) => !prev)}
                        >
                            Друзья: {friends?.length}
                        </TabsItem>
)

export const Members = ({members_count}: {members_count: number}) => <TabsItem>Участники: {members_count}</TabsItem>

export const GroupTabs = ({members_count, friends}: GroupTabsType) => {
    const [selected, setSelected] = useState(false)
    
    return  <>   
                {!!members_count && <Tabs>
                    <Members members_count={members_count}/>
                    <Friends selected={selected} setSelected={setSelected} friends={friends}/>
                </Tabs>}
                <CardGrid size="l" spaced={true}>
                    {selected  && friends?.map((friend: UserType) => (
                        <Card><Div>{friend.first_name} {friend.last_name}</Div></Card>
                    ))}
                </CardGrid>
            </>
}