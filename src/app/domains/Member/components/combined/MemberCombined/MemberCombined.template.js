import { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { MemberAdvancedForm } from 'domains/Member/components/forms'
import { Modal, FabButton } from 'app/components/Lib'
import { setData, getData } from 'app/services/Firestore'
import { callFunction, func } from 'app/services/Functions'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'

const MemberCombined = () => {
  const [open, setOpen] = useState(false)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    defaultValues: {
      role: 'user'
    }
  })

  const onSubmit = async (data) => {
    const { email, role } = data

    //check if user already exist
    try {
      const user = await getData(COLLECTIONS.USERS, md5(email))
      if (!user.isPending) {
        setLoading(false)
        setOpen(false)
        //TODO refactor: error message to const
        return setOpenSnackbarError('User already exist.')
      }
    } catch (e) {}

    try {
      setLoading(true)
      await setData(COLLECTIONS.USERS, md5(email), {
        email,
        role,
        isPending: true
      })
      const sendInvitation = callFunction(func.SEND_INVITATION)
      await sendInvitation({ email })
      setOpenSnackbarSuccess(true)
    } catch (error) {
      console.log(error)
      setOpenSnackbarError('Something went wrong.')
    }
    setLoading(false)
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
      <FabButton onClick={handleClickOpen} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert variant="filled" severity="success">
          Invitation successfully sent.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!openSnackbarError}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert variant="filled" severity="error">
          {openSnackbarError}
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
          onClick: submitForm,
          loading
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
