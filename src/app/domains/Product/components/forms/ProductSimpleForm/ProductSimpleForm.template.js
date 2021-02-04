import {
  Form,
  FormGenerator,
  FormButtons,
  useForm
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
        value: 'text'
      }
    }
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

const ProductSimpleForm = (props) => {
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

ProductSimpleForm.propTypes = {}
ProductSimpleForm.defaultProps = {}

export default ProductSimpleForm
