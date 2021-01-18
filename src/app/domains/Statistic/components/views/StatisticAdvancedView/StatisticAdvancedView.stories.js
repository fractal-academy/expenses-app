import StatisticAdvancedView from './StatisticAdvancedView.template'

const metadata = {
  title: 'domains/Statistic/components/views/StatisticAdvancedView',
  component: StatisticAdvancedView
}
export default metadata

const Template = (args) => <StatisticAdvancedView {...args} />

export const StatisticAdvancedViewStory = Template.bind({})

StatisticAdvancedViewStory.args = {}
