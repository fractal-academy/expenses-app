import { List, ListItem, Divider, Paper } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import { MemberAdvancedView } from 'domains/Member/components/views'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'

const MemberList = (props) => {
  const { users } = props
  let history = useHistory()
  return (
    <Row>
      <Col cw={12}>
        <List>
          {users.map((user) => (
            <Paper key={user.id} style={{ marginBottom: '8px' }}>
              <ListItem
                onClick={() =>
                  history.push(`${ROUTES_PATHS.MEMBERS_ALL}/${user.id}`)
                }>
                <MemberAdvancedView horizontal withName {...user} />
              </ListItem>
              <Divider />
            </Paper>
          ))}
        </List>
      </Col>
    </Row>
  )
}
export default MemberList
