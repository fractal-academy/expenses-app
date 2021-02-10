import Loader from './Loader.template'

const metadata = {
  title: 'components/Lib/Loader',
  component: Loader
}
export default metadata

const Template = (args) => <Loader {...args} />

export const LoaderStory = Template.bind({})

LoaderStory.args = {}
