import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'

const RegularProductShow = (props) => {
  return <ProductAdvancedView type="product" {...props} />
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
