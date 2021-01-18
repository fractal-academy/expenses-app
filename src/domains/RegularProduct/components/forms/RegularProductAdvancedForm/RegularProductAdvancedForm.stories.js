import RegularProductAdvancedForm from './RegularProductAdvancedForm.template'

const metadata = {
  title: 'domains/RegularProduct/components/forms/RegularProductAdvancedForm',
  component: RegularProductAdvancedForm
}
export default metadata

const Template = (args) => <RegularProductAdvancedForm {...args} />

export const RegularProductAdvancedFormStory = Template.bind({})

RegularProductAdvancedFormStory.args = {}
