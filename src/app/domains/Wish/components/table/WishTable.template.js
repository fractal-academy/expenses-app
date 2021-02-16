import PropTypes from 'prop-types'
import { Spinner, Table } from 'components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const WishTable = (props) => {
  const { setStatusMessage, actions } = props

  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.WISHES)
  )
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Table
        type="wishes"
        products={data}
        setStatusMessage={setStatusMessage}
        actions={actions}
      />
    </>
  )
}

WishTable.propTypes = {
  setStatusMessage: PropTypes.func
}
export default WishTable
