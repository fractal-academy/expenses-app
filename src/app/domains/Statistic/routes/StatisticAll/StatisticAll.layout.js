import { StatisticAdvancedView } from 'domains/Statistic/components/views'
import { FiltersWithCollapse } from 'app/domains/Statistic/components/FiltersWithCollapse'
import { CollapseWallet } from 'app/domains/Statistic/components/CollapseWallet'
import { StatisticProvider } from 'app/context/StatisticsContext'

const StatisticAll = (props) => {
  return (
    <>
      <StatisticProvider>
        <FiltersWithCollapse />
        <StatisticAdvancedView />
        <CollapseWallet />
      </StatisticProvider>
    </>
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
