import NotificationAdvancedView from './NotificationAdvancedView.template'

const metadata = {
  title: 'domains/Notification/components/views/NotificationAdvancedView',
  component: NotificationAdvancedView
}
export default metadata

const Template = (args) => <NotificationAdvancedView {...args} />

export const NotificationAdvancedViewStory = Template.bind({})

NotificationAdvancedViewStory.args = {
  notificationText: 'Lorem ipsum dolor amet',
  notificationTime: 3600,
  verticalAlignment: 'center',
  horizontalAlignment: 'around',
  textMaxWidth: '200px'
}
