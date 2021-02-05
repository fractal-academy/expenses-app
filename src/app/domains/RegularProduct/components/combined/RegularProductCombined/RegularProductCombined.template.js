import { Modal, FabButton } from 'app/components/Lib'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { RegularProductAdvancedForm } from 'app/domains/RegularProduct/components/forms'
import PropTypes from 'prop-types'

const RegularProductCombined = (props) => {
  const { title, typeModalEdit } = props

  const [open, setOpen] = useState(false)
  const form = useForm({})

  const onSubmit = () => {
    setOpen(false)
  }
  const submitForm = () => form.submit()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <FabButton onClick={handleClickOpen} />
      <Modal
        open={open}
        title={title}
        titleTypographyProps={{ variant: 'h5' }}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          text: typeModalEdit ? 'Save' : 'Submit',
          variant: 'contained',
          color: 'primary',
          onClick: submitForm
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <RegularProductAdvancedForm
          form={form}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}

RegularProductAdvancedForm.propTypes = {
  title: PropTypes.string,
  typeModalEdit: PropTypes.bool
}

export default RegularProductCombined
