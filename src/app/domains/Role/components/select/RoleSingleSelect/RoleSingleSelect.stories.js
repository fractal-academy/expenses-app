import RoleSingleSelect from './RoleSingleSelect.template'

const metadata = {
  title: 'domains/Role/components/select/RoleSingleSelect',
  component: RoleSingleSelect,
  argTypes: {
    onChange: {
      action: 'changed role'
    }
  }
}
export default metadata

const Template = (args) => <RoleSingleSelect {...args} />

export const RoleSingleSelectStory = Template.bind({})

RoleSingleSelectStory.args = {}
