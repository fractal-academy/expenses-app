import React from 'react'
import {
  Button,
  FormControl,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  Fab,
  Snackbar,
  FormHelperText
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import AddIcon from '@material-ui/icons/Add'
import { RoleSingleSelect } from 'app/domains/Role/components/select'
import { STORE } from 'app/constants'
import md5 from 'md5'

const MemberCombined = (props) => {
  const [open, setOpen] = React.useState(false)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = React.useState(false)
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false)
  const { register, handleSubmit, control, errors } = useForm()

  const onSubmit = (data) => {
    STORE.collection('users')
      .doc(md5(data.email))
      .set({
        email: data.email,
        role: data.role,
        isPending: true
      })
      .then(() => {
        setOpenSnackbarSuccess(true)
      })
      .catch((error) => {
        setOpenSnackbarError(true)
      })
    setOpen(false)
  }

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
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
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

      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <Box p={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle id="form-dialog-title" p={4}>
              Create user
            </DialogTitle>
            <DialogContent>
              <Box display="flex" justifyContent="center">
                <FormControl fullWidth>
                  <Box display="flex" justifyContent="center">
                    <Controller
                      rules={{ required: 'Enter a role' }}
                      control={control}
                      name="role"
                      render={({ onChange, value }) => (
                        <RoleSingleSelect role={value} onChange={onChange} />
                      )}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <FormHelperText error>
                      {errors.role ? errors.role.message : <> &nbsp;</>}
                    </FormHelperText>
                  </Box>
                  <TextField
                    label="Email"
                    name="email"
                    error={!!errors.email}
                    helperText={
                      errors.email?.message ? errors.email.message : ' '
                    }
                    inputRef={register({
                      pattern: {
                        value: new RegExp(
                          '^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?gmail.com$'
                        ),
                        message: 'Enter a valid email address'
                      },
                      required: 'Enter email'
                    })}
                  />
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Dialog>
    </>
  )
}

export default MemberCombined
