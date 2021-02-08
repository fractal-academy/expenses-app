import MemberAdvancedView from './MemberAdvancedView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberAdvancedView',
  component: MemberAdvancedView
}
export default metadata

const Template = (args) => <MemberAdvancedView {...args} />

export const MemberAdvancedViewStory = Template.bind({})

MemberAdvancedViewStory.args = {
  avatarUrl:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-11-27_19-32-45.jpg?alt=media&token=3ec57533-1460-48f8-8442-35ccbbac5753',
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'admin',
  email: 'olenashevchuk0@gmail.com',
  phone: '+3809457152',
  date: '1455753600000'
}
