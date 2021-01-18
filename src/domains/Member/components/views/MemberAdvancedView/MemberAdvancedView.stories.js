import MemberAdvancedView from './MemberAdvancedView.template'

const metadata = {
  title: 'domains/Member/components/views/MemberAdvancedView',
  component: MemberAdvancedView
}
export default metadata

const Template = (args) => <MemberAdvancedView {...args} />

export const MemberAdvancedViewStory = Template.bind({})

MemberAdvancedViewStory.args = {}
