import Avatar from './Avatar.template'

const metadata = {
  title: 'components/Lib/Avatar',
  component: Avatar
}
export default metadata

const Template = (args) => <Avatar {...args} />

export const AvatarStory = Template.bind({})

AvatarStory.args = {}
