import ColorSimpleView from './ColorSimpleView.template'

const metadata = {
  title: 'domains/Color/components/views/ColorSimpleView',
  component: ColorSimpleView
}
export default metadata

const Template = (args) => <ColorSimpleView {...args} />

export const ColorSimpleViewStory = Template.bind({})

ColorSimpleViewStory.args = {
  color: 'BLUE'
}
