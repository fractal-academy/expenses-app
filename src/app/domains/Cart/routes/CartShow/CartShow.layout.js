import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const CartShow = () => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const [value, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.CART).doc(id)
  )

  if (loading) {
    return <Spinner />
  }

  // [TEMPLATE]
  return <ProductAdvancedView id={id} type="cart" data={value} />
}

export default CartShow
