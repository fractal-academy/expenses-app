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
    placeholder: 'Description'
  }
]

const RegularProductSimpleForm = (props) => {
  const { onSubmit, onSubmitFail, formProps, form, buttonProps } = props

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

export default RegularProductSimpleForm
