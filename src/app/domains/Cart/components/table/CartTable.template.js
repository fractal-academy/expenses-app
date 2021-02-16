import PropTypes from 'prop-types'
import { Table } from 'app/components/Lib'
import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { firestore, deleteData } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CartTable = (props) => {
  const { setStatusMessage } = props

  const [data] = useCollectionData(firestore.collection(COLLECTIONS.CART))

  const [confirm, setConfirm] = useState(false)

  const handleDelete = (selectedItems) => {
    try {
      selectedItems.map((item) => deleteData(COLLECTIONS.CART, item))

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
    <>
      {data && (
        <Table
          type="cart"
          products={data}
          handleDelete={handleDelete}
          setStatusMessage={setStatusMessage}
        />
      )}
    </>
  )
}

CartTable.propTypes = {
  setStatusMessage: PropTypes.func
}

export default CartTable
