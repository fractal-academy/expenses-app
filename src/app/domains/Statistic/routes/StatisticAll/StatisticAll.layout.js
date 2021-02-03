import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { StatisticSimpleFilter } from 'domains/Statistic/components/filters'
import { Box } from '@qonsoll/react-design'

const StatisticAll = (props) => {
  return (
    <>
      <StatisticSimpleFilter />
      <StatisticAdvancedView />
    </>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
