import { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import {
  deleteData,
  getData,
  setData,
  firestore,
  getTimestamp
} from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { WalletCombinedWithSelect } from 'app/domains/Wallet/components/combined/WalletCombinedWithSelect'
import { useSession } from 'app/context/SessionContext/hooks'

const CartTable = (props) => {
  // INTERFACE
  const { setStatusMessage, actions } = props

  // CUSTOM HOOKS
  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.CART)
  )
  const session = useSession()

  // STATE
  const [confirm, setConfirm] = useState(false)

  // COMPUTED PROPERTIES
  const userName = `${session.firstName} ${session.surname}`

  // HELPER FUNCTIONS
  const costCalculation = (price, quantity) => {
    return price * quantity
  }
  const onCheckClick = async (selectedItems) => {
    const checking = async () => {
      //number of selected products
      let count = selectedItems.length

      //required fields
      const fields = ['name', 'price', 'quantity']

      //item of product
      for (let item of selectedItems) {
        /*
        get data for every product*/
        const doc = await getData(COLLECTIONS.CART, item)

        //status for one product, fields are empty or not
        let status = true

        //lop for required fields
        fields.forEach((item) => {
          /*
          keys are keys in product object*/
          Object.keys(doc).includes(item)
            ? /*
            if required field is in product*/
              doc[item]
              ? /*
              if required field isn`t empty  */
                (status = status && true)
              : /*
                if required field is empty  */
                (status = false)
            : /*
              if required field isn`t in product*/
              (status = false)
        })
        status && count-- //if everyone field is no empty
      }
      return count
    }
    const count = await checking()
    /*
    count - how many items with empty fields*/
    return count
  }

  const handleMove = async (data, selectedItems) => {
    /*
      sum which will be minus from wallet`s balance     */
    let sum = 0

    selectedItems.map(async (item) => {
      try {
        /*
        get info about product in card      */
        const product = await getData(COLLECTIONS.CART, item)
        /*
        set data to collection purchases with additional fields (info about user)*/
        await setData(COLLECTIONS.PURCHASES, item, {
          ...product,
          assign: userName,
          avatarURL: session.avatarURL,
          wallet: data.nameWallet,
          dateBuy: data.dateBuy ? data.dateBuy : getTimestamp().now()
        })
        /*
        delete current product from collection card */
        await deleteData(COLLECTIONS.CART, item)
        /*
        calculate sum for product*/
        sum += costCalculation(product.price, product.quantity)
        /*
        set new balance to wallet*/
        await setData(COLLECTIONS.WALLETS, data.id, {
          balance: data.balance - sum
        })
        /* 
        a message about successful operation*/
        setStatusMessage({
          open: true,
          message: 'Products were bought',
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
    })
  }

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
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {data && (
        <Table
          type="cart"
          products={data}
          actions={actions}
          handleDelete={handleDelete}
          setStatusMessage={setStatusMessage}
          /*
          component for select wallet*/
          WrapperForCheck={WalletCombinedWithSelect}
          /*
          function for checking. every product have filled fields or not. 
          if once field has an empty field, you will not see WrapperForCheck */
          onCheckClick={onCheckClick}
          /*
          function for moving a product from card to purchase*/
          handleMove={handleMove}
        />
      )}
    </>
  )
}

CartTable.propTypes = {
  setStatusMessage: PropTypes.func
}

export default CartTable
