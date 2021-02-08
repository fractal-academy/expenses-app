import CartEdit from './CartEdit.layout'

const metadata = {
  title: 'domains/Cart/routes/CartEdit',
  component: CartEdit
}
export default metadata

const Template = (args) => <CartEdit {...args} />

export const CartProductEditStory = Template.bind({})

CartProductEditStory.args = {}
