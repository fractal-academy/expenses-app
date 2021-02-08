import DateRange from './DateRange.template'

const metadata = {
  title: 'components/Lib/Select',
  component: DateRange
}
export default metadata

const Template = (args) => <DateRange {...args} />

export const DateRangeStory = Template.bind({})

DateRangeStory.args = {}
