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
  const { text, productNumber, ...textProps } = props

  const pluralize = require('pluralize')

  const measureName =
    (productNumber > 1 && text?.length > 2 && pluralize.plural(text)) || text

  // [TEMPLATE]
  return (
    <Container>
      <Row noGutters h="center">
        <Col display="flex" cw="auto">
          <Typography {...textProps}>
            {productNumber || 'None'} {productNumber && measureName}
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

export default MeasureSimpleView
