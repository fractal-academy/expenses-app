import React, { useState } from 'react'
import { Row } from '@qonsoll/react-design'
import { FabButton, Modal } from 'app/components/Lib'
import { Switch, Typography } from '@material-ui/core'
import { firestore, setData } from 'app/services/Firestore'
import { useForm } from 'mui-form-generator-fractal-band-2'
import { ProductSimpleForm } from 'app/domains/Product/components/forms/ProductSimpleForm'
import { RegularProductSimpleForm } from 'app/domains/RegularProduct/components/forms/RegularProductSimpleForm'

const ProductCombinedForm = (props) => {
  const { title, collectionName } = props

  const [open, setOpen] = useState(false)
  const [switchState, setSwitchState] = useState(true)
  const [loading, setLoading] = useState(false)

  const form = useForm()
  const onAddProduct = async (data) => {
    try {
      setLoading(true)
      const id = firestore.collection(collectionName).doc().id
      await setData(collectionName, id, {
        id: id,
        name: data.nameProduct,
        description: data.description
      })
      form.reset({})
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    setSwitchState(true)
    setOpen(false)
  }
  const onAddRegularProduct = async (data) => {
    try {
      console.log(data)
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
  }

  const submitForm = () => form.submit()

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
                Add wish
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

export default ProductCombinedForm
