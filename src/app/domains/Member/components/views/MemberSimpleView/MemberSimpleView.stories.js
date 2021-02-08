import MemberSimpleView from './MemberSimpleView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberSimpleView',
  component: MemberSimpleView
}
export default metadata

const Template = (args) => <MemberSimpleView {...args} />

export const MemberSimpleViewStory = Template.bind({})

MemberSimpleViewStory.args = {
  avatarUrl:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-11-27_19-32-45.jpg?alt=media&token=3ec57533-1460-48f8-8442-35ccbbac5753',
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'admin'
}
