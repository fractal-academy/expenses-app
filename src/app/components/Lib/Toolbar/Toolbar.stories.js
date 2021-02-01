import Toolbar from './Toolbar.template'

const metadata = {
  title: 'components/Lib/Toolbar',
  component: Toolbar
}
export default metadata

const Template = (args) => <Toolbar {...args} />

export const ToolbarStory = Template.bind({})

ToolbarStory.args = {}
