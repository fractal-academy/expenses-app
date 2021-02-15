import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

const MeasureSimpleView = (props) => {
  const { text, productNumber } = props

  const measureName =
    (productNumber > 1 && text.length > 2 && `${text}s`) || text

  return (
    <Container>
      <Row noGutters h="center">
        <Col display="flex" cw="auto">
          <Box mr={0.5}>{productNumber}</Box>
          {measureName}
        </Col>
      </Row>
    </Container>
  )
}

MeasureSimpleView.propTypes = {
  text: PropTypes.string,
  textProps: PropTypes.object,
  productNumber: PropTypes.number
}

export default MeasureSimpleView
