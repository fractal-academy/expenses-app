import MemberSimpleView from './MemberSimpleView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberSimpleView',
  component: MemberSimpleView
}
export default metadata

const Template = (args) => <MemberSimpleView horizontal {...args} />

export const MemberSimpleViewStory = Template.bind({})

MemberSimpleViewStory.args = {}
