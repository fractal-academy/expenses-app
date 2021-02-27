import { COLLECTIONS } from 'app/constants'
import {
  addData,
  getTimestamp,
  setData,
  getCollectionRef
} from 'app/services/Firestore'
import { useHistory } from 'react-router-dom'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext'
import { types, useMessageDispatch } from 'app/context/MessageContext'
import determineDateBuy from 'domains/Cart/routes/CartEdit/determineDateBuy'
import { WalletCombinedWithSelect } from 'app/domains/Wallet/components/combined'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const PurchaseCreate = () => {
  const [openWalletSelect, setOpenWalletSelect] = useState(false)
  const [dataFromForm, setDataFromForm] = useState()

  //CUSTOM HOOKS
  const messageDispatch = useMessageDispatch()

  // [ADDITIONAL HOOKS]
  const history = useHistory()
  const user = useSession()
  const userName = `${user.firstName} ${user.surname}`

  const getProductCategory = async () => {
    try {
      const category = await getCollectionRef(COLLECTIONS.CATEGORIES)
        .where('nameCategory', '==', dataFromForm.category)
        .get()
      return category
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: 'You can not get category'
      })
    }
  }

  const onAddPurchase = async (wallet) => {
    try {
      const dateBuy = determineDateBuy(dataFromForm, messageDispatch)
      /*
       set product to collection purchase  with additional fields (info about user)*/
      await addData(COLLECTIONS.PURCHASES, {
        name: dataFromForm.name,
        description: dataFromForm.description,
        category: dataFromForm.category,
        price: dataFromForm.price,
        quantity: dataFromForm.quantity,
        measures: dataFromForm?.measures || '',
        assign: userName,
        avatarURL: user.avatarURL,
        wallet: wallet.nameWallet,
        privateWallet: wallet.privateWallet,
        dateBuy: dateBuy || getTimestamp().now()
      })

      /*
       set new balance to wallet*/
      await setData(COLLECTIONS.WALLETS, wallet.id, {
        balance: wallet.balance - dataFromForm.price
      })
      /*set spended money to category spendings*/
      const category = await getProductCategory()
      await setData(COLLECTIONS.CATEGORIES, category.docs[0].id, {
        spent: category.docs[0].data().spent + parseInt(dataFromForm.price)
      })
      Logger(
        'Move product to purchase',
        `Product '${dataFromForm.name}' was moved to purchase`,
        user
      )
      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: `Product was bought`
      })
      history.goBack()
    } catch (error) {
      console.log(error.message)
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: 'You can not buy product'
      })
    }
    return true
  }

  //HELPER FUNCTIONS
  const onAddDataForm = async (data) => {
    try {
      setDataFromForm(data)
      setOpenWalletSelect(true)
    } catch (error) {
      messageDispatch({
        type: types.OPEN_ERROR_MESSAGE,
        payload: 'You can not submit form'
      })
    }
  }
  const onCancel = () => history.goBack()

  const CustomButton = (props) => (
    <WalletCombinedWithSelect
      title="Select a wallet"
      open={openWalletSelect}
      setClose={setOpenWalletSelect}
      onSubmitFunction={onAddPurchase}>
      <Button {...props} type="submit" />
    </WalletCombinedWithSelect>
  )

  return (
    <ProductAdvancedForm
      show={[
        'name',
        'description',
        'price',
        'currency',
        'category',
        'quantity',
        'measures',
        'dateBuy'
      ]}
      onSubmit={onAddDataForm}
      buttonProps={{
        onClickCancel: onCancel,
        buttonPropsSubmit: { component: CustomButton }
      }}
    />
  )
}

export default PurchaseCreate
