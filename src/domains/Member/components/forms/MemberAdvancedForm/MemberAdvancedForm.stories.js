import MemberAdvancedForm from './MemberAdvancedForm.template'

const metadata = {
  title: 'domains/Member/components/forms/MemberAdvancedForm',
  component: MemberAdvancedForm
}
export default metadata

const Template = (args) => <MemberAdvancedForm {...args} />

export const MemberAdvancedFormStory = Template.bind({})

MemberAdvancedFormStory.args = {}
