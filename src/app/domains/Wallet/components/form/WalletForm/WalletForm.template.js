import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { WalletSingleSelect } from 'domains/Wallet/components/select'

const config = [
  {
    type: 'text',
    label: 'Name wallet',
    name: 'nameWallet',
    placeholder: 'Enter name wallet',
    rules: {
      required: 'Enter name wallet',
      pattern: {
        value: 'text'
      }
    }
  },
  {
    label: 'Private',
    name: 'privateWallet',
    type: 'checkbox'
  },
  {
    inlineLayout: [
      {
        type: 'number',
        label: 'Balance',
        name: 'balance',
        placeholder: 'Enter balance',
        rules: {
          required: 'Enter balance'
        }
      },
      {
        label: 'Currency',
        name: 'idCurrency',
        Component: CurrencySimpleView,
        colProps: { cw: 'auto' }
      },
      {
        label: 'Wallet',
        name: 'select',
        Component: WalletSingleSelect,
        rules: {
          required: 'Select wallet'
        },
        defaultValues: ''
      }
    ]
  }
]

const WalletForm = (props) => {
  // INTERFACE
  const {
    formData,
    show,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps,
    fieldProps
  } = props

  // TEMPLATE
  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      defaultValues={formData}
      {...formProps}>
      <FormGenerator config={config} show={show} fieldProps={fieldProps} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

WalletForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default WalletForm
