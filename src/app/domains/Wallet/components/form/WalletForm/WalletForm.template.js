import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons,
  useForm
} from 'mui-form-generator-fractal-band-2'
import { MemberSingleSelect } from 'app/domains/Member/components/select'
import { CurrencySingleSelect } from 'app/domains/Currency/components/select'

const config = [
  {
    label: 'Member',
    name: 'member',
    Component: MemberSingleSelect,
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
    type: 'text',
    label: 'Balance',
    name: 'balance',
    placeholder: 'Enter balance',
    rules: {
      required: 'Enter balance',
      pattern: {
        value: 'number'
      }
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
    formProps
  } = props

  const formRef = useForm({
    defaultValues: { ...formData }
  })

  return (
    <Form
      form={form || formRef}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} show={show} />
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
