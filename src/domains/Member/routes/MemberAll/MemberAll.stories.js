import MemberAll from './MemberAll.layout'

const metadata = {
  title: 'domains/Member/routes/MemberAll',
  component: MemberAll
}
export default metadata

const Template = (args) => <MemberAll {...args} />

export const MemberAllStory = Template.bind({})

MemberAllStory.args = {}
