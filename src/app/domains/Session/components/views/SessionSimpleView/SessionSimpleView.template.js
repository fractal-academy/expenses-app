import PropTypes from 'prop-types'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Button, Typography, SvgIcon } from '@material-ui/core'
import { useStyles } from './SessionSimpleView.styles'
import { ReactComponent as GoogleLogo } from 'assets/google.svg'

const SessionSimpleView = (props) => {
  const { login } = props
  const classes = useStyles(props)
  return (
    <Container>
      <Row>
        <Col>
          <Row h="center" mb="1">
            <Typography variant="h4">Sign in</Typography>
          </Row>
          <Row h="center" mx="3">
            <Typography variant="subtitle2" className={classes.root}>
              Use your company Google account @senseteq.io to log in.
            </Typography>
          </Row>
          <Row h="center" my="4">
            <Button variant="outlined" color="primary" onClick={login}>
              <SvgIcon component={GoogleLogo} viewBox="0 0 30 30" />
              Sign in with Google
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

SessionSimpleView.propTypes = {
  login: PropTypes.func
}

export default SessionSimpleView
