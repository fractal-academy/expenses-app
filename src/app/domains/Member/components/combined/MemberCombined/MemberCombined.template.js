import { useState } from 'react'
import { Fab, Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import AddIcon from '@material-ui/icons/Add'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { Modal } from 'app/components/Lib/Modal'
import { useStyles } from './MemberCombined.styles'
import md5 from 'md5'

const MemberCombined = (props) => {
  const [open, setOpen] = useState(false)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)
  const form = useForm({
    defaultValues: {
      role: 'user'
    }
  })
  const classes = useStyles()
  //TODO refactor to service
  const onSubmit = (data) => {
    // STORE.collection('users')
    //   .doc(md5(data.email))
    //   .set({
    //     email: data.email,
    //     role: data.role,
    //     isPending: true
    //   })
    //   .then(() => {
    //     setOpenSnackbarSuccess(true)
    //   })
    //   .catch((error) => {
    //     setOpenSnackbarError(true)
    //   })
    setOpen(false)
  }
  const submitForm = () => form.submit()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpenSnackbarSuccess(false)
    setOpenSnackbarError(false)
    setOpen(false)
  }
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.root}>
        <AddIcon />
      </Fab>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="error">
          This is an error message!
        </Alert>
      </Snackbar>

      <Modal
        open={open}
        title="Add a user"
        titleTypographyProps={{ variant: 'h5' }}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          variant: 'contained',
          color: 'primary',
          onClick: submitForm
        }}
        buttonCancelProps={{ variant: 'contained', onClick: handleClose }}>
        <MemberAdvancedForm
          form={form}
          show={['role', 'email']}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}

export default MemberCombined
