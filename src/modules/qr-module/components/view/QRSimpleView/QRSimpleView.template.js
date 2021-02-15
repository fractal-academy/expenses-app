import { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import QRCode from 'qrcode.react'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'

/**
 * @info QRSimpleView (14 Feb 2021) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const QRSimpleView = forwardRef((props, ref) => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()

  // [COMPUTED_PROPERTIES]
  const qrURL = `${process.env.REACT_APP_DOMAIN}${ROUTES_PATHS.QR}/${id}`

  // [TEMPLATE]
  return (
    <Row h="center">
      <Col cw="auto">
        <Box ref={ref}>
          <QRCode value={qrURL} size={192} />
        </Box>
      </Col>
    </Row>
  )
})

export default QRSimpleView
