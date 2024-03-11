export interface GetGroupsResponse {
    result: 1 | 0,
    data?: GroupType[]
  }

  export interface GroupHeaderType {
    name: string,
    closed: boolean,
    avatar_color?: string,
  }
  
  export interface GroupTabsType {
    members_count: number,
    friends?: UserType[]
  }

  export interface GroupType extends GroupHeaderType, GroupTabsType {
    id: number
  }

  
  
  export interface UserType {
    first_name: string,
    last_name: string
  }