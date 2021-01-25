import MemberSimpleView from './MemberSimpleView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberSimpleView',
  component: MemberSimpleView
}
export default metadata

const Template = (args) => <MemberSimpleView withName {...args} />

export const MemberSimpleViewStory = Template.bind({})

MemberSimpleViewStory.args = {
  name: 'Olena',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/IMG_20201128_153151-032.jpg?alt=media&token=f8948226-e234-4e1f-9a5c-82d53f594401'
}
