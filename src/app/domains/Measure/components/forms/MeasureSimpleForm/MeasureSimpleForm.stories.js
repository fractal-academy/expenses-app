import MeasureSimpleForm from './MeasureSimpleForm.template'

const metadata = {
  title: 'domains/Measure/components/forms/MeasureSimpleForm',
  component: MeasureSimpleForm,
  argsType: {
    onSubmit: { action: 'onSubmit' },
    onSubmitFail: { action: 'onSubmitFail' },
    show: {
      control: {
        type: 'select',
        options: ['Measure']
      }
    }
  }
}
export default metadata

const Template = (args) => <MeasureSimpleForm {...args} />

export const MeasureSimpleFormStory = Template.bind({})

MeasureSimpleFormStory.args = {
  formData: {
    Measure: 'Default'
  },
  show: ['Measure']
}
