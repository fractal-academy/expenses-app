import CategorySimpleView from './CategorySimpleView.template'

const metadata = {
  title: 'domains/Category/components/views/CategorySimpleView',
  component: CategorySimpleView
}
export default metadata

const Template = (args) => <CategorySimpleView {...args} />

export const CategorySimpleViewStory = Template.bind({})

CategorySimpleViewStory.args = {}
