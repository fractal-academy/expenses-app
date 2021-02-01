import MemberSingleSelect from './MemberSingleSelect.template'

const metadata = {
  title: 'domains/Member/components/select/MemberSingleSelect',
  component: MemberSingleSelect
}
export default metadata

const Template = (args) => <MemberSingleSelect {...args} />

export const MemberSingleSelectStory = Template.bind({})

MemberSingleSelectStory.args = {
  onChange: (selectedUser, event) => console.log(selectedUser)
}
