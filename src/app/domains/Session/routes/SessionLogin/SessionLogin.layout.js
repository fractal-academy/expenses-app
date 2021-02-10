import { useCallback } from 'react'
import { Box, Paper } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import { SessionSimpleView } from 'domains/Session/components/views'
import { loginWithGoogle } from 'app/services/Auth'

const SessionLogin = (props) => {
  const login = useCallback(async () => {
    try {
      //add flag for correct login
      sessionStorage.setItem('loggedIn', 'true')
      await loginWithGoogle()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <Row v="center" height="100%">
      <Col>
        <Paper>
          <Box p={2}>
            <SessionSimpleView login={login} />
          </Box>
        </Paper>
      </Col>
    </Row>
  )
}

SessionLogin.propTypes = {}

export default SessionLogin
