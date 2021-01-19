import MemberShow from './MemberShow.layout'

const metadata = {
  title: 'domains/Member/routes/MemberShow',
  component: MemberShow
}
export default metadata

const Template = (args) => <MemberShow {...args} />

export const MemberShowStory = Template.bind({})

MemberShowStory.args = {}
