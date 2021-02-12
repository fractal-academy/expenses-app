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
import { CurrencySingleSelect } from 'domains/Currency/components/select'

const config = [
  {
    type: 'text',
    label: 'Product Name',
    name: 'name',
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
    name: 'description',
    placeholder: 'Enter description'
  },
  {
    inlineLayout: [
      {
        type: 'number',
        label: 'Price',
        name: 'price',
        placeholder: 'Enter price',
        rules: {
          required: 'Enter price'
        }
      },
      {
        name: 'Currency',
        colProps: { cw: 'auto', style: { flex: 0 } },
        Component: CurrencySingleSelect
      }
    ]
  },
  {
    label: 'Measures',
    name: 'measures',
    Component: MeasureSingleSelectWithCreate
  },
  {
    label: 'Assign',
    name: 'assign',
    Component: MemberSingleSelect
  },
  {
    label: 'Category',
    name: 'category',
    Component: CategorySelectWithCreate
  },
  {
    type: 'date',
    label: 'remind',
    name: 'Remind'
  },
  {
    type: 'date',
    label: 'Date',
    name: 'dateBuy'
  },
  {
    type: 'number',
    label: 'Quantity',
    name: 'quantity',
    placeholder: 'Enter quantity'
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
  console.log(formData)
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
