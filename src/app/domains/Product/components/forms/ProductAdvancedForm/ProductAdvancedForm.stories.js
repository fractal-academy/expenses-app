import ProductAdvancedForm from './ProductAdvancedForm.template'

const metadata = {
  title: 'domains/Product/components/forms/ProductAdvancedForm',
  component: ProductAdvancedForm
}
export default metadata

const Template = (args) => <ProductAdvancedForm {...args} />

export const ProductAdvancedFormStory = Template.bind({})

ProductAdvancedFormStory.args = {}
