import Confirmation from './Confirmation.template'

const metadata = {
  title: 'components/Lib/Select',
  component: Confirmation
}
export default metadata

const Template = (args) => <Confirmation {...args} />

export const ConfirmationStory = Template.bind({})

ConfirmationStory.args = {}
