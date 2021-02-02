import { useState } from 'react'
import { Modal } from 'app/components/Lib/Modal'
import { IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { ProductSimpleForm } from '../../forms/ProductSimpleForm'
import { useForm } from 'mui-form-generator-fractal-band-2'
import { Switch } from '@material-ui/core'
import { RegularProductSimpleForm } from '../../../../RegularProduct/components/forms/RegularProductSimpleForm'
import { Row } from '@qonsoll/react-design'
import { Typography } from '@material-ui/core'

const ProductCombinedForm = (props) => {
  const [open, setOpen] = useState(false)

  const [switchState, setSwitchState] = useState(true)
  const formRef = useForm()

  const submitForm = () => formRef.submit()
  const onSubmit = ({ measure }) => {
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
        buttonSubmitProps={{
          type: 'submit',
          form: 'product-form',
          size: 'small',
          color: 'primary',
          variant: 'contained',
          onClick: submitForm
        }}
        buttonCancelProps={{
          onClick: onCancel,
          size: 'small',
          color: 'secondary',
          variant: 'contained'
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
            <Row>
              <ProductSimpleForm form={formRef} onSubmit={onSubmit} />
            </Row>
          </>
        ) : (
          <>
            <Row h="center">
              <Typography variant="h5" align="center">
                Add regular product
              </Typography>
            </Row>
            <Row>
              <RegularProductSimpleForm form={formRef} onSubmit={onSubmit} />
            </Row>
          </>
        )}
      </Modal>
    </>
  )
}

export default ProductCombinedForm
