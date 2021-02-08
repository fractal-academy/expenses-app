import MemberCombined from './MemberCombined.template'

const metadata = {
  title: 'domains/Member/components/combined/MemberCombined',
  component: MemberCombined
}
export default metadata

const Template = (args) => <MemberCombined {...args} />

export const MemberCombinedStory = Template.bind({})

MemberCombinedStory.args = {}
