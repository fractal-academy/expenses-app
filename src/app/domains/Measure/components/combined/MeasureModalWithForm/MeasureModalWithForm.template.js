import { IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from 'app/components/Lib/Modal'
import { MeasureSimpleForm } from '../../forms'

const MeasureModalWithForm = () => {
  const [open, setOpen] = useState(false)
  const measureForm = useForm()

  const onSubmit = ({ measure }) => {
    console.log(measure)
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
        title="Create new measure"
        buttonSubmitProps={{
          type: 'submit',
          form: 'measure-form',
          size: 'small',
          color: 'primary',
          variant: 'contained'
        }}
        buttonCancelProps={{
          onClick: onCancel,
          size: 'small',
          color: 'secondary',
          variant: 'contained'
        }}>
        <MeasureSimpleForm formContext={measureForm} formSubmit={onSubmit} />
      </Modal>
    </>
  )
}

export default MeasureModalWithForm
