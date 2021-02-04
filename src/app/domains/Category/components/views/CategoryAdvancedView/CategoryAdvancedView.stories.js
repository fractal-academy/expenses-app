import CategoryAdvancedView from './CategoryAdvancedView.template'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import 'app/config/root.scss'

const metadata = {
  title: 'domains/Category/components/views/CategoryAdvancedView',
  component: CategoryAdvancedView
}
export default metadata

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <CategoryAdvancedView
      {...args}
      valueForProgressBar={150}
      colorCategory="orange"
      nameCategory="Office"
    />
  </ThemeProvider>
)

export const CategoryAdvancedViewStory = Template.bind({})

CategoryAdvancedViewStory.args = {}
