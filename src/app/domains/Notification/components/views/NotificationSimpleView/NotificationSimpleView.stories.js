import NotificationSimpleView from './NotificationSimpleView.template'

const metadata = {
  title: 'domains/Notification/components/views/NotificationSimpleView',
  component: NotificationSimpleView
}
export default metadata

const Template = (args) => <NotificationSimpleView {...args} />

export const NotificationSimpleViewStory = Template.bind({})

NotificationSimpleViewStory.args = {
  notificationsNumber: 10,
  buttonSize: 'large'
}
