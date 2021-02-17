import { Spinner, Table } from 'app/components/Lib'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const RegularProductsTable = (props) => {
  const { setStatusMessage } = props

  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS)
  )

  if (loading) {
    return <Spinner />
  }
  return (
    <Table type="regular" products={data} setStatusMessage={setStatusMessage} />
  )
}

export default RegularProductsTable
