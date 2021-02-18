import React, { useState } from 'react'
import { Row } from '@qonsoll/react-design'
import { FabButton, Modal } from 'app/components/Lib'
import { Switch, Typography } from '@material-ui/core'
import { firestore, setData } from 'app/services/Firestore'
import { useForm } from 'mui-form-generator-fractal-band-2'
import { useSession } from 'app/context/SessionContext/hooks'
import { ProductSimpleForm } from 'app/domains/Product/components/forms/ProductSimpleForm'
import { RegularProductSimpleForm } from 'app/domains/RegularProduct/components/forms/RegularProductSimpleForm'
import { useLogger } from 'app/utils'

const ProductCombinedForm = (props) => {
  // [INTERFACES]
  const { title, collectionName, specificProductToAdd } = props

  // [STATE]
  const [open, setOpen] = useState(false)
  const [switchState, setSwitchState] = useState(true)
  const [loading, setLoading] = useState(false)

  // [ADITIONAL_HOOKS]
  const user = useSession()
  const form = useForm()

  // [CUSTOM_HOOKS]
  const onAddProductLogger = useLogger(
    'Create',
    'New product was added to wish table'
  )
  const onAddRegularProductLogger = useLogger(
    'Add',
    'Regular product was added to wish table'
  )

  // [HELPER_FUNCTIONS]
  const onAddProduct = onAddProductLogger(async (data) => {
    try {
      setLoading(true)
      const id = firestore.collection(collectionName).doc().id
      await setData(collectionName, id, {
        id: id,
        name: data.nameProduct,
        description: data.description,
        creator: user.id
      })
      form.reset({})
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    setSwitchState(true)
    setOpen(false)
  })
  const onAddRegularProduct = onAddRegularProductLogger(async (data) => {
    try {
      setLoading(true)
      const id = firestore.collection(collectionName).doc().id
      await setData(collectionName, id, {
        id: id,
        name: data.productSelect,
        description: data.description
      })
      form.reset({})
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    setSwitchState(true)
    setOpen(false)
  })
  const submitForm = () => form.submit()
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setSwitchState(true)
  }

  //TEMPLATE
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
          text: 'Submit',
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
        <Row v="center" mb={2}>
          <Typography>Single</Typography>
          <Switch onChange={() => setSwitchState(!switchState)} />
          <Typography>Regular</Typography>
        </Row>

        {switchState ? (
          <>
            <Row h="center">
              <Typography variant="h5" align="center">
                {specificProductToAdd}
              </Typography>
            </Row>
            <ProductSimpleForm
              form={form}
              onSubmit={onAddProduct}
              buttonProps={{ visible: false }}
            />
          </>
        ) : (
          <>
            <Row h="center">
              <Typography variant="h5" align="center">
                Add regular product
              </Typography>
            </Row>
            <RegularProductSimpleForm
              form={form}
              onSubmit={onAddRegularProduct}
              buttonProps={{ visible: false }}
            />
          </>
        )}
      </Modal>
    </>
  )
}
ProductCombinedForm.defaultProps = {
  specificProductToAdd: 'Add product'
}
export default ProductCombinedForm
