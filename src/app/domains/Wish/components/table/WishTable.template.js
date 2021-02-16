import { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore, deleteData } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const WishTable = (props) => {
  const { setStatusMessage, actions } = props

  const [confirm, setConfirm] = useState(false)

  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.WISHES)
  )
  if (loading) {
    return <Spinner />
  }

  const handleDelete = (selectedItems) => {
    try {
      selectedItems.map((item) => deleteData(COLLECTIONS.WISHES, item))

      setStatusMessage({
        open: true,
        message: 'Products were successfully deleted.',
        type: 'success'
      })

      setConfirm(false)
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
  }

  return (
    <Table
      type="wishes"
      products={data}
      actions={actions}
      handleDelete={handleDelete}
      setStatusMessage={setStatusMessage}
    />
  )
}

WishTable.propTypes = {
  setStatusMessage: PropTypes.func
}

export default WishTable
