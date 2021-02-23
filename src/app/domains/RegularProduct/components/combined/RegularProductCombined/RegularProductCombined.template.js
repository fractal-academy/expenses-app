import { Modal, FabButton } from 'app/components/Lib'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { RegularProductAdvancedForm } from 'app/domains/RegularProduct/components/forms'
import { COLLECTIONS } from 'app/constants'
import { firestore, setData, getTimestamp } from 'app/services/Firestore'
import PropTypes from 'prop-types'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext/hooks'

const RegularProductCombined = (props) => {
  const { title, typeModalEdit } = props

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useForm({})
  const user = useSession()

  const onAddRegularProduct = async (data) => {
    try {
      setLoading(true)
      const id = firestore.collection(COLLECTIONS.REGULAR_PRODUCTS).doc().id
      await setData(COLLECTIONS.REGULAR_PRODUCTS, id, {
        id: id,
        name: data.nameProduct,
        description: '',
        price: '',
        quantity: '',
        measures: '',
        category: data.category,
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        remind: data.reminderDate
          ? getTimestamp().fromDate(new Date(data.reminderDate))
          : null
      })
      Logger(
        'New regular product',
        `New regular product '${data.nameProduct}' was created`,
        user
      )
      form.reset({})
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
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
          onClick: submitForm,
          loading
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
