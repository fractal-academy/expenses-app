import AvatarUploader from './AvatarUploader.template'

const metadata = {
  title: 'components/Lib/AvatarUploader',
  component: AvatarUploader
}
export default metadata

const Template = (args) => <AvatarUploader {...args} />

export const AvatarUploaderStory = Template.bind({})

AvatarUploaderStory.args = {
  value:
    'https://firebasestorage.googleapis.com/v0/b/expenses-senseteq.appspot.com/o/photo_2020-10-12_12-51-17.jpg?alt=media&token=6cbefc29-8e8b-47d1-8aab-a9590540bf0a'
}
