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
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/IMG_20201128_153151-032.jpg?alt=media&token=f8948226-e234-4e1f-9a5c-82d53f594401',
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'admin',
  email: 'olenashevchuk0@gmail.com',
  phone: '+3809457152',
  date: '1455753600000'
}
