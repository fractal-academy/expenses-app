import { Button } from '@material-ui/core'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { CategorySingleSelect } from 'app/domains/Category/components/select'
import { MemberSingleSelect } from 'app/domains/Member/components/select'
import PropTypes from 'prop-types'

const config = [
  {
    type: 'text',
    label: 'Name',
    name: 'productName',
    placeholder: 'Enter regular product name',
    rules: {
      required: 'Enter regular product name',
      pattern: {
        value: 'word'
      }
    }
  },
  { label: 'Category', name: 'categoryName', Component: CategorySingleSelect },
  { label: 'Assignee', name: 'assigneeName', Component: MemberSingleSelect },
  {
    inlineLayout: [
      { label: 'Reminder', name: 'reminder', type: 'checkbox' },
      {
        type: 'date',
        label: 'Remind',
        name: 'reminderDate',
        showIfChecked: 'reminder'
      }
    ]
  }
]

const RegularProductAdvancedForm = (props) => {
  const {
    formData,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps
  } = props

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      defaultValues={formData}
      {...formProps}>
      <FormGenerator config={config} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

RegularProductAdvancedForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onSubmitFail: PropTypes.func,
  form: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default RegularProductAdvancedForm
