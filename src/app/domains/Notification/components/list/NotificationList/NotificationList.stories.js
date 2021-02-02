import NotificationList from './NotificationList.template'

const metadata = {
  title: 'domains/Notification/components/list/NotificationAdvancedView',
  component: NotificationList
}
export default metadata

const Template = (args) => <NotificationList {...args} />

export const NotificationListStory = Template.bind({})

NotificationListStory.args = {
  collectionName: 'notifications'
}
