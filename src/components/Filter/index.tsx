import { Button, FormItem } from "@vkontakte/vkui";
import { TypeSelect } from "./TypeSelect";
import { ColorSelect } from "./ColorSelect";
import { FriendSelect } from "./FriendSelect";

export const Filter = ({avatarColors}: {avatarColors: string[]}) => (
          <form onSubmit={(e) => e.preventDefault()}> 
            <TypeSelect/>
            <ColorSelect avatarColors={avatarColors}/>
            <FriendSelect />
            <FormItem>
              <Button type="submit" size="l" stretched>Искать</Button>
            </FormItem>
          </form>
)