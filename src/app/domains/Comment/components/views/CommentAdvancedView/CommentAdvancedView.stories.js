import CommentAdvancedView from './CommentAdvancedView.template'
import { ThemeProvider } from '@qonsoll/react-design'

const metadata = {
  title: 'domains/Comment/components/views/CommentAdvancedView',
  component: CommentAdvancedView
}
export default metadata

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <CommentAdvancedView
      {...args}
      valueForProgressBar={150}
      colorCategory="orange"
      nameCategory="Office"
    />
  </ThemeProvider>
)

export const CommentAdvancedViewStory = Template.bind({})

CommentAdvancedViewStory.args = {}
