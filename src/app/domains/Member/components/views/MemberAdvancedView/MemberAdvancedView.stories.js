import MemberAdvancedView from './MemberAdvancedView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberAdvancedView',
  component: MemberAdvancedView
}
export default metadata

const Template = (args) => <MemberAdvancedView {...args} />

export const MemberAdvancedViewStory = Template.bind({})

MemberAdvancedViewStory.args = {
  horizontal: true,
  name: 'Olena',
  surname: 'Shevchuk',
  role: 'ADMIN',
  email: 'olena.shevchuk@gmail.com',
  phone: '+380938987877',
  birthday: '21.11.2001'
}
