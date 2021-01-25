import RoleSingleSelect from './RoleSingleSelect.template'

const metadata = {
  title: 'domains/Role/components/select/RoleSingleSelect',
  component: RoleSingleSelect
}
export default metadata

const Template = (args) => <RoleSingleSelect {...args} />

export const RoleSingleSelectStory = Template.bind({})

RoleSingleSelectStory.args = {
  value: 'admin',
  onChange: (e, setter) => setter(e.target.value)
}
