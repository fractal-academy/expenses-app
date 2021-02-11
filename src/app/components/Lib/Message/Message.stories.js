import Message from './Message.template'

const metadata = {
  title: 'components/Lib/Message',
  component: Message,
  argTypes: {}
}
export default metadata

const Template = (args) => <Message {...args} />

export const MessageStory = Template.bind({})

MessageStory.args = {}
