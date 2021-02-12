import { Table } from 'components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CartTable = (props) => {
  const [data] = useCollectionData(firestore.collection(COLLECTIONS.CART))
  return <>{data && <Table type="cart" products={data} />}</>
}

export default CartTable
