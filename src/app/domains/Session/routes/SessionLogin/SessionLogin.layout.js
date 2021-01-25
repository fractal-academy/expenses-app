import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { SessionSimpleView } from 'domains/Session/components/views'

const SessionLogin = (props) => {
  return (
    <Paper elevation={0} variant="outlined">
      <Box p={2}>
        <SessionSimpleView />
      </Box>
    </Paper>
  )
}

SessionLogin.propTypes = {}
SessionLogin.defaultProps = {}

export default SessionLogin
