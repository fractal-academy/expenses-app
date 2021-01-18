import MeasureSimpleForm from './MeasureSimpleForm.template'

const metadata = {
  title: 'domains/Measure/components/forms/MeasureSimpleForm',
  component: MeasureSimpleForm
}
export default metadata

const Template = (args) => <MeasureSimpleForm {...args} />

export const MeasureSimpleFormStory = Template.bind({})

MeasureSimpleFormStory.args = {}
