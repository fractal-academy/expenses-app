import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import {
  firestore,
  getData,
  setData,
  getTimestamp
} from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import React, { useEffect, useState } from 'react'
import { useMessageDispatch, types } from 'app/context/MessageContext'
import { useLogger } from 'app/hooks'

const RegularProductEdit = () => {
  const history = useHistory()
  const { id } = useParams()
  const [value] = useDocumentData(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS).doc(id)
  )
  const [loading, setLoading] = useState(true)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()
  const messageDispatch = useMessageDispatch()

  // [CUSTOM_HOOKS]
  const onEditRegularProductLogger = useLogger(
    'Edit',
    'One of regular products was edited'
  )

  // [USE_EFFECTS]
  useEffect(() => {
    const fetchData = async () => {
      const dataUsers =
        value.assign && (await getData(COLLECTIONS.USERS, value.assign))
      const data = {
        ...value,
        remind: value.remind && value.remind.toDate().getTime()
      }
      if (dataUsers) {
        data.assign = {
          ...dataUsers,
          id: value.assign
        }
      }
      setDataForDefaultValue(data)
      setLoading(false)
    }
    value && fetchData()
  }, [value])

  const onEditProduct = async (data) => {
    try {
      await setData(COLLECTIONS.REGULAR_PRODUCTS, id, {
        id: id,
        name: data.name,
        description: data.description,
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        measures: data?.measures || '',
        remind: data.remind
          ? getTimestamp().fromDate(new Date(data.remind))
          : null
      })
      messageDispatch({
        type: types.OPEN_SUCCESS_MESSAGE,
        payload: 'Products were successfully edited.'
      })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }
  if (loading || !dataForDefaultValue) {
    return <Spinner />
  }

  const onCancel = () => history.goBack()
  return (
    <ProductAdvancedForm
      show={[
        'name',
        'description',
        'price',
        'currency',
        'assign',
        'category',
        'quantity',
        'measures',
        'remind'
      ]}
      formData={dataForDefaultValue}
      onSubmit={onEditProduct}
      buttonProps={{ onClickCancel: onCancel }}
    />
  )
}

RegularProductEdit.propTypes = {}

export default RegularProductEdit
