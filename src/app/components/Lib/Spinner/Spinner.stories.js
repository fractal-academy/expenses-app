import Spinner from './Spinner.template'

const metadata = {
  title: 'components/Lib/Spinner',
  component: Spinner
}
export default metadata

const Template = (args) => <Spinner {...args} />

export const SpinnerStory = Template.bind({})

SpinnerStory.args = {}
