import { CircularProgress } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'

const Spinner = (props) => {
  return (
    <Row height="100%" h="center" v="center">
      <Col cw="auto" display="flex" v="center">
        <CircularProgress color={'red'} />
      </Col>
    </Row>
  )
}

export default Spinner
