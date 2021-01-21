import {
  Box,
  List,
  ListItem,
  Divider,
  InputAdornment,
  Input
} from '@material-ui/core'
import { MemberAdvancedView } from '../../views'
import SearchIcon from '@material-ui/icons/Search'

const MemberList = () => {
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12">
          <Input
            fullWidth
            placeholder="Search..."
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <List>
            <ListItem>
              <MemberAdvancedView
                horizontal
                withName
                role={'User'}
                name="Olena"
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"></MemberAdvancedView>
            </ListItem>
            <Divider />
            <ListItem>
              <MemberAdvancedView
                horizontal
                withName
                role={'User'}
                name="Olena"
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"></MemberAdvancedView>
            </ListItem>
            <Divider />
            <ListItem>
              <MemberAdvancedView
                horizontal
                withName
                role={'User'}
                name="Olena"
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"></MemberAdvancedView>
            </ListItem>
            <Divider />
            <ListItem>
              <MemberAdvancedView
                horizontal
                withName
                role={'User'}
                name="Olena"
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"></MemberAdvancedView>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Box>
    </Box>
  )
}
export default MemberList
