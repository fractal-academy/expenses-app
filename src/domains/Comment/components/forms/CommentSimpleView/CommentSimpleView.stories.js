import CommentSimpleView from './CommentSimpleView.template'

const metadata = {
  title: 'domains/Comment/components/forms/CommentSimpleView',
  component: CommentSimpleView
}
export default metadata

const Template = (args) => <CommentSimpleView {...args} />

export const CommentSimpleViewStory = Template.bind({})

CommentSimpleViewStory.args = {}
