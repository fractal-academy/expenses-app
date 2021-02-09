import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { CurrencySingleSelect } from 'domains/Currency/components/select'
import { WalletSingleSelect } from 'domains/Wallet/components/select'
import { WalletTypeSingleSelect } from 'domains/Wallet/components/selectWalletType'

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
    name: 'access',
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
        name: 'currency',
        Component: CurrencySingleSelect,
        rules: {
          required: 'Select currency'
        },
        colProps: { cw: 'auto', style: { flex: 0 } }
      }
    ]
  },
  {
    label: 'Wallet',
    name: 'select',
    Component: WalletSingleSelect,
    rules: {
      required: 'Select wallet'
    }
  }
]

const WalletForm = (props) => {
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
