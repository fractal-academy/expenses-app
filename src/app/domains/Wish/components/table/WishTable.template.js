import { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore, deleteData, getData, setData } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const WishTable = (props) => {
  // INTERFACE
  const { setStatusMessage, actions } = props

  // STATE
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // CUSTOM HOOKS
  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.WISHES)
  )

  // HELPER FUNCTIONS
  const handleMove = async (selectedItems) => {
    for (let item of selectedItems) {
      try {
        /*
        get data about  product from wish*/
        let product = await getData(COLLECTIONS.WISHES, item)
        /*
        set product to cart*/
        await setData(COLLECTIONS.CART, item, product)
        /*
        delete product from wish*/
        await deleteData(COLLECTIONS.WISHES, item)
        setStatusMessage({
          open: true,
          message: 'Products were moved',
          type: 'success'
        })
      } catch (error) {
        /* 
        if we have error, we will see a message about unsuccessful operation*/
        setStatusMessage({
          open: true,
          message: error,
          type: 'error'
        })
      }
    }
  }
  const handleDelete = (selectedItems) => {
    try {
      setDeleteLoading(true)
      selectedItems.map((item) => deleteData(COLLECTIONS.WISHES, item))

      setStatusMessage({
        open: true,
        message: 'Products were successfully deleted.',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
    setConfirm(false)
    setDeleteLoading(false)
  }

  //TEMPLATE
  if (loading) {
    return <Spinner />
  }
  return (
    <Table
      type="wishes"
      products={data}
      actions={actions}
      handleDelete={handleDelete}
      setStatusMessage={setStatusMessage}
      confirm={confirm}
      deleteLoading={deleteLoading}
      setConfirm={setConfirm}
      /*
          function for removing products to cart */
      onCheckClick={handleMove}
    />
  )
}

WishTable.propTypes = {
  setStatusMessage: PropTypes.func
}

export default WishTable
