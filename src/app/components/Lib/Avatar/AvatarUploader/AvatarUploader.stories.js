import AvatarUploader from './AvatarUploader.template'

const metadata = {
  title: 'components/AvatarUploader',
  component: AvatarUploader
}
export default metadata

const Template = (args) => <AvatarUploader {...args} />

export const AvatarUploaderStory = Template.bind({})

AvatarUploaderStory.args = {}
