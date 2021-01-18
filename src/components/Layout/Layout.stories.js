import Layout from './Layout.template'

const metadata = {
  title: 'components/Layout',
  component: Layout
}
export default metadata

const Template = (args) => <Layout {...args} />

export const LayoutStory = Template.bind({})

LayoutStory.args = {}
