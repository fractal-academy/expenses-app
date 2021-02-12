import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const WishShow = (props) => {
  const { id } = useParams()
  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.WISHES).doc(id)
  )
  if (loading) {
    return <Spinner />
  }
  return <ProductAdvancedView type="wish" data={{ ...value.data(), id }} />
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
