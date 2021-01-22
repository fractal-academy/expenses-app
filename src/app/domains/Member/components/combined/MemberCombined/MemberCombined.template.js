import React from 'react'
import {
  Button,
  InputLabel,
  FormControl,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  Fab
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import AddIcon from '@material-ui/icons/Add'
import { RoleSingleSelect } from 'app/domains/Role/components/select'
import { db } from 'app/constants'
var md5 = require('md5')

const MemberCombined = (props) => {
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    db.collection('users')
      .doc(md5(data.email))
      .set({
        email: data.email,
        role: data.role,
        isPending: true
      })
      .then(function () {
        console.log('Document successfully written!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
    console.log(data)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">Create user</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              inputProps={{
                pattern:
                  '^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?gmail.com$'
              }}
              id="memberEmail"
              name="email"
              label="email"
              required
              inputRef={register}
            />
          </DialogContent>
          <DialogContent>
            <Box display="flex" justifyContent="center">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Controller
                  rules={{ required: 'Required' }}
                  control={control}
                  name="role"
                  render={({ onChange, value }) => (
                    <RoleSingleSelect role={value} onChange={onChange} />
                  )}
                />
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default MemberCombined
