import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'
import { Row, Col, Box } from '@qonsoll/react-design'

/**
 * @info QRSimpleView (14 Feb 2021) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const QRSimpleView = forwardRef((props, ref) => {
  // [INTERFACES]
  const { url } = props

  // [TEMPLATE]
  return (
    <Row h="center">
      <Col cw="auto">
        <Box ref={ref}>
          <QRCode value={url} size={192} />
        </Box>
      </Col>
    </Row>
  )
})

QRSimpleView.propTypes = {
  url: PropTypes.string
}

export default QRSimpleView
