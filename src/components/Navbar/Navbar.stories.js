import Navbar from './Navbar.template'

const metadata = {
  title: 'components/Navbar',
  component: Navbar
}
export default metadata

const Template = (args) => <Navbar {...args} />

export const NavbarStory = Template.bind({})

NavbarStory.args = {}
