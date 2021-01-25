import NotificationList from './NotificationList.template'

const metadata = {
  title: 'domains/Notification/components/list/NotificationAdvancedView',
  component: NotificationList
}
export default metadata

const Template = (args) => <NotificationList {...args} />

export const NotificationListStory = Template.bind({})

NotificationListStory.args = {
  notificationData: [
    {
      id: 12345,
      avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
      notificationText: 'Lorem ipsum dolor amet',
      notificationTime: 3600
    },
    {
      id: 123456,
      avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
      notificationText: 'Lorem ipsum dolor amet',
      notificationTime: 3600
    },
    {
      id: 1234567,
      avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
      notificationText: 'Lorem ipsum dolor amet',
      notificationTime: 3600
    },
    {
      id: 12345678,
      avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
      notificationText: 'Lorem ipsum dolor amet',
      notificationTime: 3600
    }
  ]
}
