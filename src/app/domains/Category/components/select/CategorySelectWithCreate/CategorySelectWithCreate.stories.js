import CategorySelectWithCreate from './CategorySelectWithCreate.template'

const metadata = {
  title: 'domains/Category/components/select/CategorySelectWithCreate',
  component: CategorySelectWithCreate
}
export default metadata

const Template = (args) => <CategorySelectWithCreate {...args} />

export const CategorySelectWithCreateStory = Template.bind({})

CategorySelectWithCreateStory.args = {}
