import Settings from './Settings.template'

const metadata = {
  title: 'components/Settings',
  component: Settings
}
export default metadata

const Template = (args) => <Settings {...args} />

export const SettingsStory = Template.bind({})

SettingsStory.args = {}
