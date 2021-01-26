import MemberAdvancedView from './MemberAdvancedView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberAdvancedView',
  component: MemberAdvancedView
}
export default metadata

const Template = (args) => <MemberAdvancedView {...args} />

export const MemberAdvancedViewStory = Template.bind({})

MemberAdvancedViewStory.args = {
  horizontal: false,
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'Admin',
  email: 'olena.shevchuk@gmail.com',
  phone: '+380938987877',
  birthday: '21.11.2001',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/IMG_20201128_153151-032.jpg?alt=media&token=f8948226-e234-4e1f-9a5c-82d53f594401'
}
