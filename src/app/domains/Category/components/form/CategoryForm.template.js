import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons,
  useForm
} from 'mui-form-generator-fractal-band-2'
import ColorSingleSelect from 'app/domains/Color/components/select/ColorSingleSelect/ColorSingleSelect.template'

const config = [
  {
    label: 'Color',
    name: 'color',
    Component: ColorSingleSelect
  },
  {
    type: 'text',
    label: 'Name',
    name: 'nameCategory',
    placeholder: 'Enter name category',
    rules: {
      required: 'Enter name category',
      pattern: {
        value: 'text'
      }
    }
  },
  {
    type: 'text',
    label: 'Budget',
    name: 'budgetLimit',
    placeholder: 'Enter budget limit',
    rules: {
      required: 'Enter budget limit',
      pattern: {
        value: 'number'
      }
    }
  }
]

const CategoryForm = (props) => {
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

CategoryForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default CategoryForm
