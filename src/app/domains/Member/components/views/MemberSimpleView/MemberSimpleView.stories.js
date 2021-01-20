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
    'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'
}
