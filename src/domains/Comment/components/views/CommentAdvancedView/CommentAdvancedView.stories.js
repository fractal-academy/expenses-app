import CommentAdvancedView from './CommentAdvancedView.template'

const metadata = {
  title: 'domains/Comment/components/views/CommentAdvancedView',
  component: CommentAdvancedView
}
export default metadata

const Template = (args) => <CommentAdvancedView {...args} />

export const CommentAdvancedViewStory = Template.bind({})

CommentAdvancedViewStory.args = {}
