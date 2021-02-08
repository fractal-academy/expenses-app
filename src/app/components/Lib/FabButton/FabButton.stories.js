import FabButton from './FabButton.template'

const metadata = {
  title: 'components/Lib/FabButton',
  component: FabButton
}
export default metadata

const Template = (args) => <FabButton {...args} />

export const FabButtonStory = Template.bind({})

FabButton.args = {}
