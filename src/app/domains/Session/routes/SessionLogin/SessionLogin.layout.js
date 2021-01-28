import { Box, Paper } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import { SessionSimpleView } from 'domains/Session/components/views'

const SessionLogin = (props) => {
  return (
    <Row v="center" height="100%">
      <Col>
        <Paper>
          <Box p={2}>
            <SessionSimpleView />
          </Box>
        </Paper>
      </Col>
    </Row>
  )
}

SessionLogin.propTypes = {}

export default SessionLogin
