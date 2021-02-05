import StatisticSimpleFilter from './StatisticSimpleFilter.template'

const metadata = {
  title: 'domains/Statistic/components/filters/StatisticSimpleFilter',
  component: StatisticSimpleFilter
}
export default metadata

const Template = (args) => <StatisticSimpleFilter {...args} />

export const StatisticSimpleFilterStory = Template.bind({})

StatisticSimpleFilterStory.args = {}
