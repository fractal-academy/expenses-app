import { CollapseDateRange } from 'domains/Statistic/components/CollapseDateRange'
import { StatisticSimpleFilter } from 'domains/Statistic/components/filters'

const FiltersWithCollapse = (props) => {
  return (
    <>
      <StatisticSimpleFilter />
      <CollapseDateRange />
    </>
  )
}
FiltersWithCollapse.propTypes = {}
FiltersWithCollapse.defaultProps = {}

export default FiltersWithCollapse
