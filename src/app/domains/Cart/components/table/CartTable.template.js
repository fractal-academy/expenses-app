import { useState } from 'react'
import { Table, Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'
import {
  deleteData,
  getData,
  setData,
  firestore,
  getTimestamp,
  getCollectionRef
} from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { WalletCombinedWithSelect } from 'app/domains/Wallet/components/combined/WalletCombinedWithSelect'
import { useSession } from 'app/context/SessionContext/hooks'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { Logger } from 'app/utils'
import { toNumber } from 'lodash'

const CartTable = (props) => {
  // INTERFACE
  const { actions } = props

  // CUSTOM HOOKS
  const [data, loading] = useCollectionData(
    firestore.collection(COLLECTIONS.CART)
  )

  const session = useSession()
  const messageDispatch = useMessageDispatch()
  // STATE
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // COMPUTED PROPERTIES
  const userName = `${session.firstName} ${session.surname}`

  // HELPER FUNCTIONS
  const onCheckClick = async (selectedItems) => {
    const checking = async () => {
      //number of selected products
      let count = selectedItems.length

      //required fields
      const fields = ['name', 'price']

      //item of product
      for (let item of selectedItems) {
        /*
        get data for every product*/
        const doc = await getData(COLLECTIONS.CART, item)

        //status for one product, fields are empty or not
        let status = true

        //lop for required fields
        fields.forEach((field) => {
          status = !!(doc[field] && status)
          /*   if required field isn`t empty status will be true  */
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
  const CartLogger = async (selectedItems, type) => {
    const prodPromises = selectedItems.map((prodId) =>
      getData(COLLECTIONS.CART, prodId)
    )
    const productsData = await Promise.allSettled(prodPromises)
    let prodNames = await productsData.map(({ value }) => value.name)

    prodNames = await prodNames.join(', ')
    const description = `${prodNames}${
      selectedItems.length > 1 ? ' were' : ' was'
    } ${type === 'Delete' ? `${type}d in cart table` : `${type}`}`.toLowerCase()

    Logger(`${type} products`, description, session)
  }

  const updateCategories = async (selectedProducts) => {
    const productsPromises = selectedProducts.map((productId) =>
      getData(COLLECTIONS.CART, productId)
    )
    const productsData = await Promise.allSettled(productsPromises)
    const products = productsData.map(({ value }) => value)

    const categoriesPromises = products.map(async (product) => {
      const snapshots = await getCollectionRef(COLLECTIONS.CATEGORIES)
        .where('nameCategory', '==', product.category)
        .get()

      return !snapshots.empty
        ? snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0]
        : null
    })

    const categoriesData = await Promise.allSettled(categoriesPromises)
    const categories = categoriesData.map(({ value }) => value)

    let categoriesMap = Object.fromEntries(
      categories.map((category) => [category.nameCategory, category])
    )

    products.forEach((product) => {
      const previousPrice = categoriesMap[product.category].spent
      const newPrice = previousPrice + toNumber(product.price)

      categoriesMap = {
        ...categoriesMap,
        [product.category]: {
          ...categoriesMap[product.category],
          spent: newPrice
        }
      }
    })

    Object.keys(categoriesMap).forEach((key) => {
      const categoryData = categoriesMap[key]
      const { id, spent } = categoryData

      setData(COLLECTIONS.CATEGORIES, id, { spent })
    })
  }

  const handleMove = async (data, selectedItems, setSelected) => {
    /*
      sum which will be minus from wallet`s balance     */
    let sum = 0
    await CartLogger(selectedItems, 'Bought')
    await selectedItems.map(async (item) => {
      try {
        /*
        get info about product in card      */
        const product = await getData(COLLECTIONS.CART, item)

        /*
        set data to collection purchases with additional fields (info about user)
        */
        await setData(COLLECTIONS.PURCHASES, item, {
          ...product,
          assign: userName,
          avatarURL: session.avatarURL,
          wallet: data.nameWallet,
          privateWallet: data.privateWallet,
          dateBuy: data.dateBuy ? data.dateBuy : getTimestamp().now()
        })
        /*
        delete current product from collection card 
        */
        await deleteData(COLLECTIONS.CART, item)
        /*
        calculate sum for product*/
        sum = sum + Number(product.price)
        /*
        a message about successful operation*/
        messageDispatch({
          type: types.OPEN_SUCCESS_MESSAGE,
          payload: 'Products were bought'
        })
      } catch (error) {
        /*
        if we have error, we will see a message about unsuccessful operation*/
        messageDispatch({
          type: types.OPEN_ERROR_MESSAGE,
          payload: error
        })
      } /*
        set new balance to wallet*/
      await setData(COLLECTIONS.WALLETS, data.id, {
        balance: Number(data.balance) - sum
      })
    })
    try {
      updateCategories(selectedItems)
      setSelected([])
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: error
      })
    }
  }

  const handleDelete = async (selectedItems, setSelected) => {
    try {
      setDeleteLoading(true)

      await CartLogger(selectedItems, 'Delete')
      for (let item of selectedItems) {
        await deleteData(COLLECTIONS.CART, item)
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
    setSelected([])
    setConfirm(false)
    setDeleteLoading(false)
  }

  // TEMPLATE
  if (loading) {
    return <Spinner />
  }
  return (
    <Table
      type="cart"
      products={data}
      actions={actions}
      handleDelete={handleDelete}
      confirm={confirm}
      setConfirm={setConfirm}
      deleteLoading={deleteLoading}
      /*
          component for select wallet*/
      WrapperForCheck={WalletCombinedWithSelect}
      /*
          title for modal window with selecting wallet */
      titleForWrapperForCheck={'Select a wallet'}
      /*
          function for checking. every product have filled fields or not.
          if once field has an empty field, you will not see WrapperForCheck */
      onCheckClick={onCheckClick}
      /*
          function for moving a product from card to purchase*/
      handleMove={handleMove}
    />
  )
}

CartTable.propTypes = {}

export default CartTable
