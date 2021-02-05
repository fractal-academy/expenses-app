import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

const MeasureSimpleView = (props) => {
  const { textProps, text, productNumber } = props

  return (
    <Container>
      <Row h="between" mb={2}>
        <Col cw="auto">
          <Typography>Quantity</Typography>
        </Col>
        <Col display="flex" cw="auto">
          <Box mr={0.5}>
            <Typography {...textProps}>{productNumber}</Typography>
          </Box>
          <Typography>{text}</Typography>
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
