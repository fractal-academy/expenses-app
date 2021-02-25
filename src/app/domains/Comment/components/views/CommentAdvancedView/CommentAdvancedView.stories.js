import CommentAdvancedView from './CommentAdvancedView.template'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/QonsollTheme'
import 'app/config/root.scss'

const metadata = {
  title: 'domains/Comment/components/views/CommentAdvancedView',
  component: CommentAdvancedView
}
export default metadata

const Template = (args) => (
  <ThemeProvider theme={Theme}>
    <CommentAdvancedView {...args} />
  </ThemeProvider>
)

export const CommentAdvancedViewStory = Template.bind({})

CommentAdvancedViewStory.args = {
  name: 'Olena',
  surName: 'Shevschiuk',
  text:
    'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
}
