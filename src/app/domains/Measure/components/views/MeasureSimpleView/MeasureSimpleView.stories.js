import MeasureSimpleView from './MeasureSimpleView.template'

const metadata = {
  title: 'domains/Measure/components/views/MeasureSimpleView',
  component: MeasureSimpleView
}
export default metadata

const Template = (args) => <MeasureSimpleView {...args} />

export const MeasureSimpleViewStory = Template.bind({})

MeasureSimpleViewStory.args = {}
