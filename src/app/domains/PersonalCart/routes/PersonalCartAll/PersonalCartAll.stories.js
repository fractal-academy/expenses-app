import CartAll from './PersonalCartAll.layout'

const metadata = {
  title: 'domains/Cart/routes/CartAll',
  component: CartAll
}
export default metadata

const Template = (args) => <CartAll {...args} />

export const CartAllStory = Template.bind({})

CartAllStory.args = {}
