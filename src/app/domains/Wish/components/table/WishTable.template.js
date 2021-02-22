import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Table, Spinner } from 'app/components/Lib'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { firestore, deleteData, getData, setData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const WishTable = (props) => {
  // INTERFACE
  const { actions } = props

  // STATE
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // CUSTOM HOOKS
  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.WISHES)
  )
  const messageDispatch = useMessageDispatch()
  // HELPER FUNCTIONS
  const handleMove = async (selectedItems, setSelected) => {
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
        messageDispatch({
          type: types.OPEN_SUCCESS_MESSAGE,
          payload: 'Products were moved'
        })
      } catch (error) {
        /*
        if we have error, we will see a message about unsuccessful operation*/
        messageDispatch({
          type: types.OPEN_ERROR_MESSAGE,
          payload: 'error'
        })
      }
    }
    setSelected([])
  }
  const handleDelete = async (selectedItems) => {
    setDeleteLoading(true)
    try {
      for (let item of selectedItems) {
        await deleteData(COLLECTIONS.WISHES, item)
      }

      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: 'Products were successfully deleted.'
      })
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: error
      })
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
      confirm={confirm}
      deleteLoading={deleteLoading}
      setConfirm={setConfirm}
      /*
          function for removing products to cart */
      onCheckClick={handleMove}
    />
  )
}

WishTable.propTypes = {}

export default WishTable
