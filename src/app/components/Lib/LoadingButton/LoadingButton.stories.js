import LoadingButton from './LoadingButton.template'

const metadata = {
  title: 'components/Lib/LoadingButton',
  component: LoadingButton
}
export default metadata

const Template = (args) => <LoadingButton {...args} />

export const LoadingButtonStory = Template.bind({})

LoadingButtonStory.args = {}
