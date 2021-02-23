import PersonalCartTable from './PersonalCartTable.template'

const metadata = {
  title: 'domains/PersonalCart/components/table',
  component: PersonalCartTable
}
export default metadata

const Template = (args) => <PersonalCartTable {...args} />

export const PersonalCartTableStory = Template.bind({})

PersonalCartTableStory.args = {}
