import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'

const CartShow = (props) => {
  return <ProductAdvancedView type="cart" {...props} />
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
