import React, { useState, useRef } from 'react'
import { saveAs } from 'file-saver'
import IconButton from '@material-ui/core/IconButton'
import { Box } from '@qonsoll/react-design'
import GetAppIcon from '@material-ui/icons/GetApp'
import { Modal } from 'components/Lib'
import { QRSimpleView, URLSimpleView } from 'qr-module/components/view'
import { Print } from 'qr-module/components/Print'

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

  // Action buttons template
  const actions = (
    <Box display="flex" justifyContent="center" width="100%">
      <Print ref={qrRef} />
      <URLSimpleView />
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
        <QRSimpleView ref={qrRef} />
      </Modal>
    </>
  )
}

export default QRCombinedModal
