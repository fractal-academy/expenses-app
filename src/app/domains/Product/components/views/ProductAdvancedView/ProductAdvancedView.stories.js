import ProductAdvancedView from './ProductAdvancedView.template'

const metadata = {
  title: 'domains/Product/components/views/ProductAdvancedView',
  component: ProductAdvancedView
}
export default metadata

const Template = (args) => <ProductAdvancedView {...args} />

export const ProductAdvancedViewStory = Template.bind({})

ProductAdvancedViewStory.args = {
  name: 'Wafle with crispy chocolate',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity: 5,
  price: 15.87,
  route: '/cart/:id',
  measure: 'bootle',
  categoryBalance: 50,
  number: 5,
  reminderDate: 1612449568,
  assignedUser: 'Ruslan',
  puchasedDate: 1614782368
}
