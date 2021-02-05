import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { ProductAdvancedView } from '../../components/views'

const RegularProductShow = (props) => {
  return (
    <ProductAdvancedView route={ROUTES_PATHS.REGULAR_PRODUCT_SHOW} {...props} />
  )
}

RegularProductShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  reminderDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default RegularProductShow
