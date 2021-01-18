import NotificationAll from './NotificationAll.layout'

const metadata = {
  title: 'domains/Notification/routes/NotificationAll',
  component: NotificationAll
}
export default metadata

const Template = (args) => <NotificationAll {...args} />

export const NotificationAllStory = Template.bind({})

NotificationAllStory.args = {}
