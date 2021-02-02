import CartTable from './CartTable.template'

const metadata = {
  title: 'domains/Cart/components/table',
  component: CartTable
}
export default metadata

const Template = (args) => <CartTable {...args} />

export const CartTableStory = Template.bind({})

CartTableStory.args = {}
