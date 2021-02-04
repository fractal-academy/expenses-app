import WishTable from './WishTable.template'

const metadata = {
  title: 'domains/Wish/components/table',
  component: WishTable
}
export default metadata

const Template = (args) => <WishTable {...args} />

export const WishTableStory = Template.bind({})

WishTableStory.args = {}
