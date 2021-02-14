import { Table } from 'app/components/Lib'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const RegularProductsTable = (props) => {
  const { setStatusMessage } = props

  const [data] = useCollectionData(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS)
  )

  return (
    <>
      {data && (
        <Table
          type="regular"
          products={data}
          setStatusMessage={setStatusMessage}
        />
      )}
    </>
  )
}

export default RegularProductsTable
