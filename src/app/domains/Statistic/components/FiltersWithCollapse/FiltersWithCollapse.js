import PropTypes from 'prop-types'
import { CollapseDateRange } from 'app/domains/Statistic/components/CollapseDateRange'
import { StatisticSimpleFilter } from 'app/domains/Statistic/components/filters'

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
