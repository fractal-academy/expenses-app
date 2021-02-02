import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import Button from '@material-ui/core/Button'
import RegularProductSimpleSelect from '../../select/RegularProductSingleSelect/RegularProductSingleSelect.template'

const show = ['productSelect', 'description']

const config = [
  {
    label: 'Select Product',
    name: 'productSelect',
    Component: RegularProductSimpleSelect
  },
  {
    type: 'multiline',
    label: 'Description',
    name: 'description',
    placeholder: 'Description',
    rules: {
      required: 'Enter budget limit',
      pattern: {
        value: 'number'
      }
    }
  }
]

const RegularProductSimpleForm = (props) => {
  const { onSubmit, onSubmitFail, formProps, form } = props

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} visible={false} />
    </Form>
  )
}

export default RegularProductSimpleForm
