import PropTypes from 'prop-types'
import {
  Form,
  FormGenerator,
  FormButtons
} from 'mui-form-generator-fractal-band-2'
import { MemberSingleSelect } from 'app/domains/Member/components/select'
import { CategorySelectWithCreate } from 'app/domains/Category/components/select'
import { MeasureSingleSelectWithCreate } from 'app/domains/Measure/components/select'
import { LoadingButton } from 'components/Lib'

// form configuration map
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
    type: 'number',
    label: 'Price',
    name: 'price',
    placeholder: 'Enter price',
    rules: {
      required: 'Enter price'
    }
  },
  {
    label: 'Assign',
    name: 'assign',
    Component: MemberSingleSelect,
    rules: {
      required: 'select assigned'
    }
  },
  {
    label: 'Category',
    name: 'category',
    Component: CategorySelectWithCreate,
    rules: {
      required: 'select category'
    }
  },
  {
    type: 'date',
    label: 'remind',
    name: 'remind'
  },
  {
    type: 'date',
    label: 'Date',
    props: { disableFuture: true },
    name: 'dateBuy',
    rules: {
      required: 'select date buy'
    }
  },
  {
    inlineLayout: [
      {
        type: 'number',
        label: 'Quantity',
        name: 'quantity',
        placeholder: 'Enter quantity'
      },
      {
        label: 'Measures',
        name: 'measures',
        Component: MeasureSingleSelectWithCreate,
        colProps: { v: 'center' }
      }
    ]
  }
]

/**
 * @info ProductAdvancedForm (18 Jan 2021) // CREATION DATE
 *
 * @since 16 Feb 2021 ( v.0.1.0 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const ProductAdvancedForm = (props) => {
  // [INTERFACES]
  const {
    formData,
    show,
    onSubmit,
    onSubmitFail,
    form,
    buttonProps,
    formProps
  } = props

  // [TEMPLATE]
  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      onSubmitFail={onSubmitFail}
      defaultValues={formData}
      {...formProps}>
      <FormGenerator config={config} show={show} />
      <FormButtons Button={LoadingButton} {...buttonProps} />
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
ProductAdvancedForm.defaultProps = {
  remind: ''
}
export default ProductAdvancedForm
