import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'

const WishShow = (props) => {
  return <ProductAdvancedView type="wish" {...props} />
}

WishShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired,
  categoryBalance: PropTypes.number.isRequired
}

export default WishShow
