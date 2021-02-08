import CategoryList from './CategoryList.template'

const metadata = {
  title: 'domains/Category/components/list/CategoryList',
  component: CategoryList
}
export default metadata

const Template = (args) => <CategoryList {...args} />

export const CategoryListStory = Template.bind({})

CategoryListStory.args = {}
