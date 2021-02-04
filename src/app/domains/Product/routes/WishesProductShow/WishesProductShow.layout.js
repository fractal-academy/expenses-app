import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { ProductAdvancedView } from '../../components/views'

const WishesProductShow = (props) => {
  return <ProductAdvancedView route={ROUTES_PATHS.WISHES_SHOW} {...props} />
}

WishesProductShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired,
  categoryBalance: PropTypes.number.isRequired
}

export default WishesProductShow
