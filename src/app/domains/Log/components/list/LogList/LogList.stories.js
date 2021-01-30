import LogList from './LogList.template'

const metadata = {
  title: 'domains/Log/components/lists/LogList',
  component: LogList
}
export default metadata

const Template = (args) => <LogList {...args} />

export const LogListStory = Template.bind({})

LogListStory.args = {}
