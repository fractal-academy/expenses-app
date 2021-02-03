import CommentSimpleForm from './CommentSimpleForm.template'

const metadata = {
  title: 'domains/Comment/components/forms/CommentSimpleForm',
  component: CommentSimpleForm
}
export default metadata

const Template = (args) => <CommentSimpleForm {...args} />

export const CommentSimpleViewStory = Template.bind({})

CommentSimpleViewStory.args = {}
