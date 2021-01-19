import StatisticAdvancedFilter from './StatisticAdvancedFilter.template'

const metadata = {
  title: 'domains/Statistic/components/filters/StatisticAdvancedFilter',
  component: StatisticAdvancedFilter
}
export default metadata

const Template = (args) => <StatisticAdvancedFilter {...args} />

export const StatisticAdvancedFilterStory = Template.bind({})

StatisticAdvancedFilterStory.args = {}
