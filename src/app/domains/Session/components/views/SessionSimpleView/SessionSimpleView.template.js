import React from 'react'
import { Row, Col, Container } from '@qonsoll/react-design'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  }
})

const SessionSimpleView = (props) => {
  const classes = useStyles(props)
  return (
    <Container>
      <Row h="center">
        <Row h="center" mb={1}>
          <Col cw={[12]}>
            <Typography variant="h4">Sign in</Typography>
          </Col>
        </Row>
        <Row h="center">
          <Col cw={[11]}>
            <Typography variant="subtitle2" className={classes.root}>
              Use your company Google account @senseteq.io to log in.
            </Typography>
          </Col>
        </Row>
        <Row h="center" my={4}>
          <Col cw={[12]}>
            <Button variant="outlined" color="primary">
              <GTranslateOutlinedIcon />
              Sign in with Google
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

SessionSimpleView.propTypes = {}
SessionSimpleView.defaultProps = {}

export default SessionSimpleView
