import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { ColorSingleSelect } from 'app/domains/Color/components/select'
import { CurrencySimpleView } from 'app/domains/Currency/components/views'
import { COLOR_VALUE } from 'app/constants/colors'

const CONFIG = [
  {
    label: 'Color',
    name: 'color',
    defaultValue: COLOR_VALUE[0].name,
    Component: ColorSingleSelect
  },
  {
    inlineLayout: [
      {
        type: 'number',
        label: 'Budget',
        name: 'budgetLimit',
        placeholder: 'Enter budget limit',
        rules: {
          required: 'Enter budget limit'
        }
      },
      {
        label: 'Currency',
        name: 'currency',
        Component: CurrencySimpleView,
        props: {
          value: 'UAH'
        },
        colProps: { cw: 'auto' }
      }
    ]
  },
  {
    type: 'text',
    label: 'Name',
    name: 'nameCategory',
    placeholder: 'Enter name category',
    rules: {
      required: 'Enter name category',
      pattern: {
        value: 'word'
      }
    }
  }
]

const CategoryForm = (props) => {
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
      <FormGenerator config={CONFIG} show={show} fieldProps={fieldProps} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

CategoryForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default CategoryForm
