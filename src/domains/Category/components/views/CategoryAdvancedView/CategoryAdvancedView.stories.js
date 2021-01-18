import CategoryAdvancedView from './CategoryAdvancedView.template'

const metadata = {
  title: 'domains/Category/components/views/CategoryAdvancedView',
  component: CategoryAdvancedView
}
export default metadata

const Template = (args) => <CategoryAdvancedView {...args} />

export const CategoryAdvancedViewStory = Template.bind({})

CategoryAdvancedViewStory.args = {}
