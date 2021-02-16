import { Spinner, Table } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { COLLECTIONS } from 'app/constants'

const PurchaseTable = () => {
  // CUSTOM HOOKS
  const [purchase, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.PURCHASES),
    { idField: 'id' }
  )

  if (loading) {
    return <Spinner />
  }
  return <Table type="purchase" products={purchase} />
}

export default PurchaseTable
