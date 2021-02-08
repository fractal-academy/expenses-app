import { Col, Container, Row } from '@qonsoll/react-design'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'

/**
 * @info RejectLogin (8 Feb 2021) // CREATION DATE
 *
 * @comment Using when not invited user want to login.
 *
 * @since 06 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const RejectLogin = () => {
  let history = useHistory()
  const redirect = () => history.push(ROUTES_PATHS.LOGIN)

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
