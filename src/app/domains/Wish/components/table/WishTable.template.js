import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Table, Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import { firestore, deleteData, getData, setData } from 'app/services/Firestore'
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
  const handleMove = async (selectedItems) => {
    for (let item of selectedItems) {
      console.log('item', item)
      try {
        let product = await getData(COLLECTIONS.WISHES, item)
        console.log('1, get product')
        await setData(COLLECTIONS.CART, item, product)
        console.log('2, set to cart')
        await deleteData(COLLECTIONS.WISHES, item)
        console.log('3 delete from wish')
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
    <>
      {data && (
        <Table
          type="wishes"
          products={data}
          actions={actions}
          handleDelete={handleDelete}
          setStatusMessage={setStatusMessage}
          onCheckClick={handleMove}
        />
      )}
    </>
  )
}

WishTable.propTypes = {
  setStatusMessage: PropTypes.func
}

export default WishTable
