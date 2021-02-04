import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons,
  useForm
} from 'mui-form-generator-fractal-band-2'
import { WalletSingleSelect } from 'app/domains/Wallet/components/select'

const WalletFormWithSelect = (props) => {
  const {
    formData,
    show,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps
  } = props

  const formRef = useForm({
    defaultValues: { wallet: formData.wallet.id }
  })
  const config = [
    {
      label: 'Wallet',
      name: 'wallet',
      Component: WalletSingleSelect,
      rules: {
        required: 'Select wallet'
      },
      data: formData.wallet.data
    }
  ]

  const WalletFormSubmit = () => {
    formRef.submit()
    onSubmit && onSubmit()
  }

  return (
    <Form
      form={form || formRef}
      onSubmit={WalletFormSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

WalletFormWithSelect.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default WalletFormWithSelect
