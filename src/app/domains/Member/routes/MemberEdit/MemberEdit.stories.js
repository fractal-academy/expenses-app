import MemberEdit from './MemberEdit.layout'

const metadata = {
  title: 'domains/Member/routes/MemberEdit',
  component: MemberEdit
}
export default metadata

const Template = (args) => <MemberEdit {...args} />

export const MemberEditStory = Template.bind({})

MemberEditStory.args = {}
