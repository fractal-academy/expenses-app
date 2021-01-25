import WishAll from './WishAll.layout'

const metadata = {
  title: 'domains/Wish/routes/WishAll',
  component: WishAll
}
export default metadata

const Template = (args) => <WishAll {...args} />

export const WishAllStory = Template.bind({})

WishAllStory.args = {}
