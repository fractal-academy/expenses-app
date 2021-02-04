import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import Button from '@material-ui/core/Button'
import { RegularProductSingleSelect } from 'app/domains/RegularProduct/components/select'

const config = [
  {
    label: 'Select Product',
    name: 'productSelect',
    Component: RegularProductSingleSelect
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
  const { onSubmit, onSubmitFail, formProps, form, visibility } = props

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} />
      <FormButtons Button={Button} visible={visibility || false} />
    </Form>
  )
}

export default RegularProductSimpleForm
