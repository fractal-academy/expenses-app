import CommentList from './CommentList.template'

const metadata = {
  title: 'domains/Comment/components/list/CommentList',
  component: CommentList
}
export default metadata

const Template = (args) => <CommentList {...args} />

export const CommentListStory = Template.bind({})

CommentListStory.args = {}
