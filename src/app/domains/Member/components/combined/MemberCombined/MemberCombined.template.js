import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Box from '@material-ui/core/Box'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { MemberSingleSelect } from '../../select'
import { useForm } from 'react-hook-form'

const MemberCombined = () => {
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, setValue } = useForm()

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
              inputRef={register}
            />
          </DialogContent>
          <DialogContent>
            <Box display="flex" justifyContent="center">
              <MemberSingleSelect inputRef={register} name="role" />
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
