import MeasureSimpleForm from './MeasureSimpleForm.template'

const metadata = {
  title: 'domains/Measure/components/forms/MeasureSimpleForm',
  component: MeasureSimpleForm,
  argTypes: {
    formContext: {
      description: 'Takes var with useForm() functions from react-hook-form'
    },
    formSubmit: {
      description: 'Takes onSubmit function'
    },
    textFieldProps: {
      description: 'All Material-UI props for'
    }
  }
}
export default metadata

const Template = (args) => <MeasureSimpleForm {...args} />

export const MeasureSimpleFormStory = Template.bind({})

MeasureSimpleFormStory.args = {}
