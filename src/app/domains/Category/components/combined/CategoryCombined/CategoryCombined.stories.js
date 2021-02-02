import CategoryCombined from './CategoryCombined.template'

const metadata = {
  title: 'domains/Category/components/combined/CategoryCombined',
  component: CategoryCombined
}
export default metadata

const Template = (args) => <CategoryCombined {...args} />

export const CategoryCombinedStory = Template.bind({})

CategoryCombinedStory.args = {
  title: 'Title',
  typeModalEdit: false
}
