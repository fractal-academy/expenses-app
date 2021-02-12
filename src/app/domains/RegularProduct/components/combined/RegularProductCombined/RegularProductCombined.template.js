import { Modal, FabButton } from 'app/components/Lib'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { RegularProductAdvancedForm } from 'app/domains/RegularProduct/components/forms'
import { COLLECTIONS } from 'app/constants'
import { addData } from 'app/services/Firestore'
import PropTypes from 'prop-types'

const RegularProductCombined = (props) => {
  const { title, typeModalEdit } = props

  const [open, setOpen] = useState(false)
  const form = useForm({})

  const onAddRegularProduct = (data) => {
    addData(COLLECTIONS.REGULAR_PRODUCTS, {
      name: data.productName,
      category: data.categoryName,
      assign: data.assigneeName.firstName,
      reminderDate: new Date(data.reminderDate).getTime()
    }).then(() => setOpen(false))
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
          onSubmit={onAddRegularProduct}
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
