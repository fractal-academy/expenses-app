import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'
import { firestore } from 'app/services/Firestore'
import { useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
const CartShow = (props) => {
  // CUSTOM HOOKS
  const { id } = useParams()
  const [value, loading, error] = useCollection(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )
  if (loading) {
    return <Spinner />
  }
  return <ProductAdvancedView type="cart" data={{ ...value.data(), id }} />
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
