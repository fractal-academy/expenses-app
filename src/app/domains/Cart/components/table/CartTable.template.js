import { Spinner, Table } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CartTable = (props) => {
  const { setStatusMessage } = props

  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.CART)
  )
  if (loading) {
    return <Spinner />
  }
  return (
    <Table type="cart" products={data} setStatusMessage={setStatusMessage} />
  )
}

export default CartTable
