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

const MemberCombined = () => {
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box>
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
              autoFocus
              name="email"
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              required
              inputRef={register}
            />
          </DialogContent>
          <DialogContent>
            <Box display="flex" justifyContent="center">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Controller
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
    </Box>
  )
}

export default MemberCombined
