import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const WishShow = () => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const [value, loading] = useDocumentData(
    firestore.collection(COLLECTIONS.WISHES).doc(id)
  )

  if (loading) {
    return <Spinner />
  }
  // [TEMPLATE]
  return <ProductAdvancedView type="wish" data={value} id={id} />
}

export default WishShow
