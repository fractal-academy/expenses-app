import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { saveAs } from 'file-saver'
import IconButton from '@material-ui/core/IconButton'
import { Box } from '@qonsoll/react-design'
import GetAppIcon from '@material-ui/icons/GetApp'
import { Modal } from 'components/Lib'
import { QRSimpleView, URLSimpleView } from 'qr-module/components/view'
import { Print } from 'qr-module/components/Print'
import { ROUTES_PATHS } from 'app/constants'

/**
 * @info QRCombinedModal (14 Feb 2021) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const QRCombinedModal = (props) => {
  // [INTERFACES]
  const { children } = props

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
    <Box display="flex" justifyContent="center" width="100%">
      <Print ref={qrRef} />
      <URLSimpleView url={url} />
      <IconButton onClick={saveToFile}>
        <GetAppIcon />
      </IconButton>
    </Box>
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
