import { Table } from 'components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const WishTable = (props) => {
  const { setStatusMessage } = props

  const { actions } = props
  const [data] = useCollectionData(firestore.collection(COLLECTIONS.WISHES))

  return (
    <>
      {data && (
        <Table
          type="wishes"
          products={data}
          setStatusMessage={setStatusMessage}
          actions={actions}
        />
      )}
    </>
  )
}

export default WishTable
