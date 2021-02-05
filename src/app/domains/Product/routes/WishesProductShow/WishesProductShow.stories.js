import WishesProductShow from './WishesProductShow.layout'

const metadata = {
  title: 'domains/Product/routes/WishesProductShow',
  component: WishesProductShow
}
export default metadata

const Template = (args) => <WishesProductShow {...args} />

export const WishesProductShowStory = Template.bind({})

WishesProductShowStory.args = {
  name: 'Wafle with crispy chocolate',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quantity: 5,
  price: 15.87,
  measure: 'bootle',
  categoryBalance: 50,
  number: 5,
  assignedUser: 'Ruslan',
  puchasedDate: 1614782368
}
