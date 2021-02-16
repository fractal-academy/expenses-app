import CommentListWithAdd from './CommentListWithAdd.template'

const metadata = {
  title: 'domains/Comment/combined/list/CommentListWithAdd',
  component: CommentListWithAdd
}
export default metadata

const Template = (args) => <CommentListWithAdd {...args} />

export const CommentListWithAddStory = Template.bind({})

CommentListWithAddStory.args = {}
