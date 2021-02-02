import MemberList from './MemberList.template'

const metadata = {
  title: 'domains/Member/components/list/MemberList',
  component: MemberList
}
export default metadata

const Template = (args) => <MemberList {...args} />

export const MemberListStory = Template.bind({})

MemberListStory.args = {}
