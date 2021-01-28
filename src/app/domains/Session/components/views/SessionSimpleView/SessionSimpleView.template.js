import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from '@qonsoll/react-design'
import { Button, Typography } from '@material-ui/core'
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined'
import { useStyles } from './SessionSimpleView.styles'
import { ROUTES_PATHS } from 'app/constants'

const SessionSimpleView = (props) => {
  const classes = useStyles(props)
  let history = useHistory()
  const redirect = () => {
    history.push(ROUTES_PATHS.CART_ALL)
  }
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
            <Button variant="outlined" color="primary" onClick={redirect}>
              <GTranslateOutlinedIcon />
              Sign in with Google
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

SessionSimpleView.propTypes = {}

export default SessionSimpleView
