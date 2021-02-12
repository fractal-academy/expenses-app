import { Table } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { COLLECTIONS } from 'app/constants'

const CartTable = () => {
  // CUSTOM HOOKS
  const [value] = useCollection(firestore.collection(COLLECTIONS.CART))
  const data = value?.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }))

  return <>{value && <Table type="cart" products={data} />}</>
}

export default CartTable
