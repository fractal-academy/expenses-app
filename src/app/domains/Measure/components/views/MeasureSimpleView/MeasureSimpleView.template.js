import PropTypes from 'prop-types'
import { Container, Row, Col } from '@qonsoll/react-design'
import Typography from '@material-ui/core/Typography'

/**
 * @info MeasureSimpleView (26 Jan 2021) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MeasureSimpleView = (props) => {
  // [INTERFACES]
  const { text, productNumber } = props

  // [COMPUTED_PROPERTIES]
  const measureName =
    (productNumber > 1 && text.length > 2 && `${text}s`) || text

  // [TEMPLATE]
  return (
    <Container>
      <Row noGutters h="center">
        <Col display="flex" cw="auto">
          <Typography>
            {productNumber} {measureName}
          </Typography>
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
