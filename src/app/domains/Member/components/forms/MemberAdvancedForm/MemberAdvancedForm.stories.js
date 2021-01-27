import MemberAdvancedForm from './MemberAdvancedForm.template'

const metadata = {
  title: 'domains/Member/components/forms/MemberAdvancedForm',
  component: MemberAdvancedForm,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: ['surname', 'role', 'email', 'phone']
      }
    }
  }
}
export default metadata

const Template = (args) => <MemberAdvancedForm {...args} />

export const MemberAdvancedFormStory = Template.bind({})

MemberAdvancedFormStory.args = {
  formData: {
    avatarUrl:
      'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-11-27_19-32-45.jpg?alt=media&token=3ec57533-1460-48f8-8442-35ccbbac5753',
    name: 'Olena',
    surname: 'Shevchuk',
    role: 'admin',
    email: 'olenashevchuk0@gmail.com',
    phone: '+3809457152',
    dateInSeconds: 1455753600000
  },
  show: ['surname', 'role', 'email', 'phone']
}
