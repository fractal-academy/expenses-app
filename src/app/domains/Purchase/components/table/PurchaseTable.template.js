import { COLLECTIONS } from 'app/constants'
import { getCollectionRef } from 'app/services'
import { Spinner, Table } from 'app/components/Lib'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const PurchaseTable = () => {
  // CUSTOM HOOKS
  const [purchase, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PURCHASES).orderBy('dateBuy', 'desc'),
    { idField: 'id' }
  )

  if (loading) {
    return <Spinner />
  }
  return <Table type="purchase" products={purchase} purchaseAssign />
}

export default PurchaseTable
