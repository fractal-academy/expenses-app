import { useEffect } from 'react'
import { Col, Container, Row } from '@qonsoll/react-design'
import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { auth } from 'app/services/Auth'

/**
 * @info RejectLogin (8 Feb 2021) // CREATION DATE
 *
 * @comment Using when not invited user want to login.
 *
 * @since 09 Feb 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 */

const RejectLogin = () => {
  const history = useHistory()
  const redirect = () => history.push(ROUTES_PATHS.LOGIN)
  //logout rejected user after 10 seconds
  useEffect(() => {
    setTimeout(() => auth.signOut(), 10000)
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <Typography variant="subtitle1" align="center">
            Your login were rejected.
          </Typography>
          <Typography variant="h5" align="center">
            Get over here!
          </Typography>
          <Row h="center">
            <Col cw="auto">
              <Button onClick={redirect}>back to login</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default RejectLogin
