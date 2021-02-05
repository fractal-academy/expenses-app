import { ProductAdvancedForm } from 'app/domains/Product/components/forms'

const metadata = {
  title: 'domains/Product/components/forms/ProductAdvancedForm',
  component: ProductAdvancedForm,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: [
          'ProductName',
          'Description',
          'Price',
          'Assign',
          'Category',
          'Remind',
          'Measures',
          'Date'
        ]
      }
    }
  }
}
export default metadata

const Template = (args) => <ProductAdvancedForm {...args} />

export const ProductAdvancedFormStory = Template.bind({})

ProductAdvancedFormStory.args = {
  formData: {
    ProductName: 'Product',
    Description:
      'Product Product Product Product Product Product Product Product v_v',
    Price: 1000,
    CategoryForm: 'Default'
  },
  show: [
    'ProductName',
    'Measures',
    'Date',
    'Description',
    'Price',
    'Assign',
    'Category',
    'Remind'
  ]
}
