import PrioritySingleSelect from './PrioritySingleSelect.template'

const metadata = {
  title: 'domains/Priority/components/select/PrioritySingleSelect',
  component: PrioritySingleSelect
}
export default metadata

const Template = (args) => <PrioritySingleSelect {...args} />

export const PrioritySingleSelectStory = Template.bind({})

PrioritySingleSelectStory.args = {}
