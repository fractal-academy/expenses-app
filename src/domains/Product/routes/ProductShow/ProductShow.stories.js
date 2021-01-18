import ProductShow from './ProductShow.layout'

const metadata = {
  title: 'domains/Product/routes/ProductShow',
  component: ProductShow
}
export default metadata

const Template = (args) => <ProductShow {...args} />

export const ProductShowStory = Template.bind({})

ProductShowStory.args = {}
