import ProductAdvancedView from './ProductAdvancedView.template'

const metadata = {
  title: 'domains/Product/components/views/ProductAdvancedView',
  component: ProductAdvancedView
}
export default metadata

const Template = (args) => <ProductAdvancedView {...args} />

export const ProductAdvancedViewStory = Template.bind({})

ProductAdvancedViewStory.args = {}
