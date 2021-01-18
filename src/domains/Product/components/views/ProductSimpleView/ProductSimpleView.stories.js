import ProductSimpleView from './ProductSimpleView.template'

const metadata = {
  title: 'domains/Product/components/views/ProductSimpleView',
  component: ProductSimpleView
}
export default metadata

const Template = (args) => <ProductSimpleView {...args} />

export const ProductSimpleViewStory = Template.bind({})

ProductSimpleViewStory.args = {}
