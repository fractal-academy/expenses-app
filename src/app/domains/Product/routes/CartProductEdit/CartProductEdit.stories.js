import CartProductEdit from './CartProductEdit.layout'

const metadata = {
  title: 'domains/Product/routes/CartProductEdit',
  component: CartProductEdit
}
export default metadata

const Template = (args) => <CartProductEdit {...args} />

export const CartProductEditStory = Template.bind({})

CartProductEditStory.args = {}
