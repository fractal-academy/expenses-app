import RoleSimpleView from './RoleSimpleView.template'
import PropTypes from 'prop-types'

const metadata = {
  title: 'domains/Role/components/views/RoleSimpleView',
  component: RoleSimpleView
}
export default metadata

const Template = (args) => <RoleSimpleView {...args} />

export const RoleSimpleViewStory = Template.bind({})

RoleSimpleViewStory.args = {
  role: 'admin'
}
