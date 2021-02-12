import { Fragment } from 'react'
import {
  List,
  ListItem,
  Divider,
  InputAdornment,
  TextField
} from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { MemberAdvancedView } from 'domains/Member/components/views'
import SearchIcon from '@material-ui/icons/Search'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'

const MemberList = (props) => {
  const { users } = props
  let history = useHistory()
  return (
    <Container>
      <Row>
        <Col cw={12}>
          <TextField
            size="medium"
            margin="dense"
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          <List>
            {users.map((user) => {
              return (
                <Fragment key={user.id}>
                  <ListItem
                    onClick={() =>
                      history.push(`${ROUTES_PATHS.MEMBERS_ALL}/${user.id}`)
                    }>
                    <MemberAdvancedView horizontal withName {...user} />
                  </ListItem>
                  <Divider />
                </Fragment>
              )
            })}
          </List>
        </Col>
      </Row>
    </Container>
  )
}
export default MemberList
