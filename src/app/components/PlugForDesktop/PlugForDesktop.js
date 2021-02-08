import { Row, Col, Container } from '@qonsoll/react-design'
import { Typography } from '@material-ui/core'
const PlugForDesktop = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row h="center" mb="1">
            <Typography variant="h4">Sorry</Typography>
          </Row>
          <Row h="center" mx="3">
            <Typography variant="subtitle2">
              We support only mobile platform.
            </Typography>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default PlugForDesktop
