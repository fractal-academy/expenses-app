import PrioritySimpleView from './PrioritySimpleView.template'

const metadata = {
  title: 'domains/Priority/components/views/PrioritySimpleView',
  component: PrioritySimpleView
}
export default metadata

const Template = (args) => <PrioritySimpleView {...args} />

export const PrioritySimpleViewStory = Template.bind({})

PrioritySimpleViewStory.args = {}
