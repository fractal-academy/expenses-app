import SessionSimpleView from './SessionSimpleView.template'

const metadata = {
  title: 'domains/Session/components/views/SessionSimpleView',
  component: SessionSimpleView
}
export default metadata

const Template = (args) => <SessionSimpleView {...args} />

export const SessionSimpleViewStory = Template.bind({})

SessionSimpleViewStory.args = {}
