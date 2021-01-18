import ProductEdit from './ProductEdit.layout'

const metadata = {
  title: 'domains/Product/routes/ProductEdit',
  component: ProductEdit
}
export default metadata

const Template = (args) => <ProductEdit {...args} />

export const ProductEditStory = Template.bind({})

ProductEditStory.args = {}
