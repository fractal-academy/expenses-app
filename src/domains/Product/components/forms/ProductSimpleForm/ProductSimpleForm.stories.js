import ProductSimpleForm from './ProductSimpleForm.template'

const metadata = {
  title: 'domains/Product/components/forms/ProductSimpleForm',
  component: ProductSimpleForm
}
export default metadata

const Template = (args) => <ProductSimpleForm {...args} />

export const ProductSimpleFormStory = Template.bind({})

ProductSimpleFormStory.args = {}
