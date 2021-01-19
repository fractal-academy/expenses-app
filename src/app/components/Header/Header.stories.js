import Header from './Header.template'

const metadata = {
  title: 'components/Header',
  component: Header
}
export default metadata

const Template = (args) => <Header {...args} />

export const HeaderStory = Template.bind({})

HeaderStory.args = {}
