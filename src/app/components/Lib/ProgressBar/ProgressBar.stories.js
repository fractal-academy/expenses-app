import ProgressBar from './ProgressBar.template'

const metadata = {
  title: 'components/ProgressBar',
  component: ProgressBar
}
export default metadata

const Template = (args) => <ProgressBar value={10} {...args} />

export const ProgressBarStory = Template.bind({})

ProgressBar.args = {}
