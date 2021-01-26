import MemberAdvancedForm from './MemberAdvancedForm.template'

const metadata = {
  title: 'domains/Member/components/forms/MemberAdvancedForm',
  component: MemberAdvancedForm
}
export default metadata

const Template = (args) => <MemberAdvancedForm {...args} />

export const MemberAdvancedFormStory = Template.bind({})

MemberAdvancedFormStory.args = {
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-11-27_19-32-45.jpg?alt=media&token=cf2e4d18-fed4-4dc8-bec5-5ae803a2053f',
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'admin',
  email: 'olenashevchuk0@gmail.com',
  phone: '+3809457152',
  date: '1455753600000'
}
