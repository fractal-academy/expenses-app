import CategoryAdvancedView from './CategoryAdvancedView.template'

import 'app/config/root.scss'

const metadata = {
  title: 'domains/Category/components/views/CategoryAdvancedView',
  component: CategoryAdvancedView
}
export default metadata

const Template = (args) => (
  <CategoryAdvancedView
    {...args}
    valueForProgressBar={150}
    colorCategory="orange"
    nameCategory="Office"
  />
)

export const CategoryAdvancedViewStory = Template.bind({})

CategoryAdvancedViewStory.args = {}
