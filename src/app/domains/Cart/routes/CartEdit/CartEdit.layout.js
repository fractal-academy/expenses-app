import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import {
  firestore,
  setData,
  addData,
  getData,
  getTimestamp
} from 'app/services/Firestore'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import React, { useEffect, useState } from 'react'
import { useLogger } from 'app/hooks'

const CartEdit = (props) => {
  //STATE
  const [loading, setLoading] = useState(true)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()
  // [ADITIONAL HOOKS]
  const history = useHistory()
  const { id } = useParams()
  const [value] = useDocumentData(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )

  //CUSTOM HOOKS
  const onEditProductLogger = useLogger(
    'Edit',
    'One of the products was edited'
  )

  //USE EFFECTS
  useEffect(() => {
    const fetchData = async () => {
      const dataUsers =
        value.assign && (await getData(COLLECTIONS.USERS, value.assign))
      const data = {
        ...value,
        dateBuy: value.dateBuy
          ? value.dateBuy.toDate().getTime()
          : new Date().getTime()
      }
      if (dataUsers) {
        data.assign = { ...dataUsers, id: value.assign }
      }
      setDataForDefaultValue(data)
      setLoading(false)
    }

    value && fetchData()
  }, [value])

  //HELPER FUNCTIONS
  const onEditProduct = onEditProductLogger(async (data) => {
    try {
      await setData(COLLECTIONS.CART, id, {
        id: id,
        name: data.name,
        description: data.description,
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        measures: data?.measures || '',
        dateBuy: data.dateBuy
          ? getTimestamp().fromDate(new Date(data.dateBuy))
          : getTimestamp().fromDate(new Date())
      })
      addData(COLLECTIONS.NOTIFICATIONS, {
        date: getTimestamp().now(),
        text: `You were assigned to buy '${data.name}' in Cart`,
        userId: [data.assign.id]
      })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  })
  const onCancel = () => history.goBack()

  //TEMPLATE
  if (loading || !dataForDefaultValue) {
    return <Spinner />
  }
  return (
    <ProductAdvancedForm
      formData={dataForDefaultValue}
      show={[
        'name',
        'description',
        'price',
        'currency',
        'assign',
        'category',
        'quantity',
        'measures',
        'dateBuy'
      ]}
      onSubmit={onEditProduct}
      buttonProps={{ onClickCancel: onCancel }}
    />
  )
}

CartEdit.propTypes = {}

export default CartEdit
