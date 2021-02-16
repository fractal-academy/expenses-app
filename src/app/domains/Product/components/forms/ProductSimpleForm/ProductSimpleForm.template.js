import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import Button from '@material-ui/core/Button'

const show = ['nameProduct', 'description']

const config = [
  {
    type: 'text',
    label: 'Name',
    name: 'nameProduct',
    placeholder: 'Enter wish',
    rules: {
      required: 'Enter wish',
      pattern: {
        value: 'word'
      }
    }
  },
  {
    type: 'multiline',
    label: 'Description',
    name: 'description',
    placeholder: 'Description'
  }
]

const ProductSimpleForm = (props) => {
  const { onSubmit, onSubmitFail, formProps, form, buttonProps } = props
  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      {...formProps}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={Button} {...buttonProps} />
    </Form>
  )
}

ProductSimpleForm.propTypes = {}

export default ProductSimpleForm
