import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'app/domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'app/domains/Statistic/components/CollapseWallet'
const StatisticAll = (props) => {
  return (
    <>
      <FiltersWithCollapse />
      <StatisticAdvancedView />
      <CollapseWallet />
    </>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
