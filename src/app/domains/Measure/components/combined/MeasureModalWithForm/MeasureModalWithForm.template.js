import { IconButton, TextField } from '@material-ui/core'
import { Modal } from 'app/components/Lib'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { MeasureSimpleForm } from '../../forms'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const MeasureModalWithForm = () => {
  const [open, setOpen] = useState(false)
  const measureForm = useForm()

  const onSubmit = ({ measure }) => {
    alert(measure)
    setOpen(false)
  }
  const onCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <AddCircleIcon />
      </IconButton>
      <Modal
        open={open}
        setOpen={setOpen}
        title="some title text"
        onSubmit={onSubmit}
        onCancel={onCancel}
        buttonSubmitProps={{
          color: 'primary',
          variant: 'contained'
        }}
        buttonCancelProps={{
          color: 'secondary',
          variant: 'contained'
        }}>
        <form onSubmit={measureForm.handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="measure"
            name="measure"
            label="measure"
            inputRef={measureForm.register}
            fullWidth
          />
        </form>
      </Modal>
    </>
  )
}
MeasureModalWithForm.propTypes = {}
export default MeasureModalWithForm
