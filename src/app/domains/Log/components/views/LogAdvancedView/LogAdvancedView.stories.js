import LogAdvancedView from './LogAdvancedView.template'

const metadata = {
  title: 'domains/Log/components/views/LogAdvancedView',
  component: LogAdvancedView
}
export default metadata

const Template = (args) => <LogAdvancedView {...args} />

export const LogAdvancedViewStory = Template.bind({})

LogAdvancedViewStory.args = {
  action: 'Log in',
  userMail: 'abcd@senseteq.io',
  actionDescription: 'logged in'
}
