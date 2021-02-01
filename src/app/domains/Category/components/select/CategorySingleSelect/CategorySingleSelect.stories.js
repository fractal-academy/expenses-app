import CategorySingleSelect from './CategorySingleSelect.template'

const metadata = {
  title: 'domains/Category/components/select/CategorySingleSelect',
  component: CategorySingleSelect
}
export default metadata

const Template = (args) => <CategorySingleSelect {...args} />

export const CategorySingleSelectStory = Template.bind({})

CategorySingleSelectStory.args = {
  currentCategory: 'Other'
}
