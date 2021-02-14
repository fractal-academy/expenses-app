import { Table } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CartTable = (props) => {
  const { setStatusMessage } = props

  const [data] = useCollectionData(firestore.collection(COLLECTIONS.CART))

  return (
    <>
      {data && (
        <Table
          type="cart"
          products={data}
          setStatusMessage={setStatusMessage}
        />
      )}
    </>
  )
}

export default CartTable
