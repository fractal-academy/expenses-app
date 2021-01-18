import MeasureSingleSelect from './MeasureSingleSelect.template'

const metadata = {
  title: 'domains/Measure/components/select/MeasureSingleSelect',
  component: MeasureSingleSelect
}
export default metadata

const Template = (args) => <MeasureSingleSelect {...args} />

export const MeasureSingleSelectStory = Template.bind({})

MeasureSingleSelectStory.args = {}
