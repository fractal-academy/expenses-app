import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { saveAs } from 'file-saver'
import IconButton from '@material-ui/core/IconButton'
import { Col, Container, Row } from '@qonsoll/react-design'
import GetAppIcon from '@material-ui/icons/GetApp'
import { Modal } from 'components/Lib'
import { QRSimpleView, URLSimpleView } from 'qr-module/components/view'
import { Print } from 'qr-module/components/Print'
import { ROUTES_PATHS } from 'app/constants'

/**
 * @info QRCombinedModal (14 Feb 2021) // CREATION DATE
 *
 * @since 16 Feb 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const QRCombinedModal = (props) => {
  // [INTERFACES]
  const { children } = props

  // [ADDITIONAL_HOOKS]
  const { id } = useParams()

  // [COMPONENT_STATE_HOOKS]
  const qrRef = useRef(null)
  const [open, setOpen] = useState(false)

  // [HELPER_FUNCTIONS]
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const saveToFile = () => {
    qrRef.current.firstChild.toBlob((blob) => {
      saveAs(blob, 'image.png')
    })
  }

  // [COMPUTED_PROPERTIES]
  const url = `${process.env.REACT_APP_DOMAIN}${ROUTES_PATHS.QR}/${id}`

  // Action buttons template
  const actions = (
    <Container>
      <Row h="center">
        <Col cw="auto">
          <Print ref={qrRef} />
        </Col>
        <Col cw="auto">
          <URLSimpleView url={url} />
        </Col>
        <Col cw="auto">
          <IconButton onClick={saveToFile}>
            <GetAppIcon />
          </IconButton>
        </Col>
      </Row>
    </Container>
  )

  // [TEMPLATE]
  return (
    <>
      {children && React.cloneElement(children, { onClick: handleOpen })}
      <Modal
        actions={actions}
        open={open}
        buttonCancelProps={{ onClick: handleClose }}
        buttonSubmitProps={{ onClick: handleClose }}>
        <QRSimpleView ref={qrRef} url={url} />
      </Modal>
    </>
  )
}

export default QRCombinedModal
