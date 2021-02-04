import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { ProductAdvancedView } from '../../components/views'

const CartProductShow = (props) => {
  return <ProductAdvancedView route={ROUTES_PATHS.CART_SHOW} {...props} />
}

CartProductShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  puchasedDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default CartProductShow
