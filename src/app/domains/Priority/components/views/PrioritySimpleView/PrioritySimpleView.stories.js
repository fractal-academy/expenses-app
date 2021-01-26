import PrioritySimpleView from './PrioritySimpleView.template'
import { PRIORITY } from 'app/constants'
const { PRIORITY_VALUE } = PRIORITY
const metadata = {
  title: 'domains/Priority/components/views/PrioritySimpleView',
  component: PrioritySimpleView,
  argTypes: {
    priority: {
      control: {
        type: 'select',
        options: PRIORITY_VALUE
      }
    }
  }
}
export default metadata

const Template = (args) => <PrioritySimpleView {...args} />

export const PrioritySimpleViewStory = Template.bind({})

PrioritySimpleViewStory.args = {
  priority: PRIORITY_VALUE[0]
}
