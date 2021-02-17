import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { MeasureSingleSelect } from 'app/domains/Measure/components/select'

const config = [
  {
    type: 'text',
    label: 'Measure',
    name: 'measure',
    placeholder: 'Enter measure',
    rules: {
      required: 'Enter measure',
      pattern: {
        value: 'word'
      }
    }
  },
  {
    label: 'Measure select',
    name: 'measureSelect',
    Component: MeasureSingleSelect
  }
]

const MeasureSimpleForm = (props) => {
  const {
    formData,
    show,
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
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

MeasureSimpleForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}
MeasureSimpleForm.defaultops = {
  measure: ''
}
export default MeasureSimpleForm
