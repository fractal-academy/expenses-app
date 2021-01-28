import {
  List,
  ListItem,
  Divider,
  InputAdornment,
  Input
} from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { MemberAdvancedView } from '../../views'
import SearchIcon from '@material-ui/icons/Search'

const USERS = [
  { name: 'Olena', role: 'User' },
  { name: 'Sasha', role: 'User' },
  { name: 'Max', role: 'User' },
  { name: 'Dima', role: 'User' },
  { name: 'Ruslan', role: 'Admin' }
]
const MemberList = () => {
  return (
    <Container>
      <Row>
        <Col cw={12}>
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
            {USERS.map((user) => {
              return (
                <>
                  <ListItem>
                    <MemberAdvancedView
                      horizontal
                      withName
                      role={user.role}
                      name={user.name}
                      avatarUrl="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
                    />
                  </ListItem>
                  <Divider />
                </>
              )
            })}
          </List>
        </Col>
      </Row>
    </Container>
  )
}
export default MemberList
