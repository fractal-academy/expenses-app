import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { ProductAdvancedView } from 'app/domains/Product/components/views/ProductAdvancedView'
const StatisticAll = (props) => {
  return (
    <ProductAdvancedView
      name="Tomato"
      price="5.40"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      route={ROUTES_PATHS.CART_SHOW}
      {...props}
    />
  )
}

StatisticAll.propTypes = {}
StatisticAll.defaultProps = {}

export default StatisticAll
