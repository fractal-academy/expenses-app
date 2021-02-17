import PropTypes from 'prop-types'
import { Container, Row, Col } from '@qonsoll/react-design'

const MeasureSimpleView = (props) => {
  const { text, productNumber } = props

  const measureName =
    (productNumber > 1 && text.length > 2 && `${text}s`) || text

  return (
    <Container>
      <Row noGutters h="center">
        <Col display="flex" cw="auto">
          {productNumber} {measureName}
        </Col>
      </Row>
    </Container>
  )
}

MeasureSimpleView.propTypes = {
  text: PropTypes.string,
  productNumber: PropTypes.number
}
MeasureSimpleView.defaultProps = {
  text: 'None',
  productNumber: ''
}

export default MeasureSimpleView
