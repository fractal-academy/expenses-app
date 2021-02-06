import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { ProductAdvancedView } from '../../../Product/components/views'

const CartShow = (props) => {
  return <ProductAdvancedView route={ROUTES_PATHS.CART_SHOW} {...props} />
}

CartShow.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.object,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  purchasedDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default CartShow
