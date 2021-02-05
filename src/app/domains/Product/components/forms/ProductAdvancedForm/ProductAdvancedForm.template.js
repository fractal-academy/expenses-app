import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { MemberSingleSelect } from 'app/domains/Member/components/select'
import { CategorySelectWithCreate } from 'app/domains/Category/components/select'
import { MeasureSingleSelectWithCreate } from 'app/domains/Measure/components/select'

// if you need to use form on Product Edit(Wish) use props show show: [ 'ProductName','Description', 'Price','Assign','Category','Measures' ]
//if you need to use form on Product Edit(Cart) use props show show: [ 'ProductName','Description', 'Price','Assign','Category','Measures','Date' ]
//if you need to use form on Product Edit(Regular) use props show show: [ 'ProductName','Description', 'Price','Assign','Category','Measures','Remind' ]
const config = [
  {
    type: 'text',
    label: 'Product Name',
    name: 'ProductName',
    placeholder: 'Enter product name',
    rules: {
      required: 'Enter product name',
      pattern: {
        value: 'word'
      }
    }
  },
  {
    type: 'multiline',
    label: 'Description',
    name: 'Description',
    placeholder: 'Enter description'
  },
  {
    type: 'text',
    label: 'Price',
    name: 'Price',
    placeholder: 'Enter price',
    rules: {
      required: 'Enter price',
      pattern: {
        value: 'number'
      }
    }
  },
  {
    label: 'Measures',
    name: 'Measures',
    Component: MeasureSingleSelectWithCreate
  },
  {
    label: 'Assign',
    name: 'Assign',
    Component: MemberSingleSelect
  },
  {
    label: 'Category',
    name: 'Category',
    Component: CategorySelectWithCreate
  },
  {
    type: 'date',
    label: 'Remind',
    name: 'Remind'
  },
  {
    type: 'date',
    label: 'Date',
    name: 'Date'
  }
]

const ProductAdvancedForm = (props) => {
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

ProductAdvancedForm.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  onSubmitFail: PropTypes.func,
  show: PropTypes.array,
  buttonProps: PropTypes.object,
  formProps: PropTypes.object
}

export default ProductAdvancedForm
