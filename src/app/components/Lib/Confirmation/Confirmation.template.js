import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { LoadingButton } from '../LoadingButton'

const Confirmation = (props) => {
  const {
    open,
    setOpen,
    loading,
    onConfirm,
    onCancel,
    children,
    text,
    action
  } = props

  const handleClickOpen = () => {
    setOpen(true)
  }

  const onClickConfirm = () => {
    onConfirm && onConfirm()
  }
  const onClickCancel = () => {
    onCancel && onCancel()
    handleClose()
  }
  const handleClose = () => {
    !loading && setOpen(false)
  }
  return (
    <>
      {React.cloneElement(children, { onClick: handleClickOpen })}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{action}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancel} color="primary">
            Cancel
          </Button>
          <LoadingButton
            onClick={onClickConfirm}
            color="primary"
            loading={loading}
            autoFocus>
            Confirm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default Confirmation
