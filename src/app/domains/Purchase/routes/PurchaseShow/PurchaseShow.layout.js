import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const PurchaseShow = (props) => {
  const { id } = useParams()
  const [purchase, loading] = useDocumentData(
    firestore.collection(COLLECTIONS.PURCHASES).doc(id)
  )

  if (loading) {
    return <Spinner />
  }

  return <ProductAdvancedView type="purchase" data={purchase} id={id} />
}

PurchaseShow.propTypes = {
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

export default PurchaseShow
