import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { MemberSingleSelect } from 'domains/Member/components/select'
import { CurrencySingleSelect } from 'domains/Currency/components/select'
import { WalletSingleSelect } from 'domains/Wallet/components/select'

const config = [
  {
    label: 'Member',
    name: 'member',
    Component: MemberSingleSelect,
    defaultValue: '',
    rules: {
      required: 'Select member'
    }
  },
  {
    label: 'Currency',
    name: 'currency',
    Component: CurrencySingleSelect,
    rules: {
      required: 'Select currency'
    }
  },
  {
    type: 'text',
    label: 'Name',
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
    type: 'number',
    label: 'Balance',
    name: 'balance',
    placeholder: 'Enter balance',
    rules: {
      required: 'Enter balance'
    }
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
