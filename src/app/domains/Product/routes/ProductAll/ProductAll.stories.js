import ProductAll from './ProductAll.layout'

const metadata = {
  title: 'domains/Product/routes/ProductAll',
  component: ProductAll
}
export default metadata

const Template = (args) => <ProductAll {...args} />

export const ProductAllStory = Template.bind({})

ProductAllStory.args = {}
