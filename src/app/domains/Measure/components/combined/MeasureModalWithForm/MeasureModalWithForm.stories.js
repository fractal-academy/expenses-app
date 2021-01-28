import MeasureModalWithForm from './MeasureModalWithForm.template'

const metadata = {
  title: 'domains/Measure/combined/MeasureModalWithForm',
  component: MeasureModalWithForm
}
export default metadata

const Template = (args) => <MeasureModalWithForm {...args} />

export const MeasureModalWithFormStory = Template.bind({})

MeasureModalWithForm.args = {}
