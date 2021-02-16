import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import {
  firestore,
  setData,
  addData,
  getTimestamp,
  getData
} from 'app/services/Firestore'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import React, { useEffect, useState } from 'react'

const WishEdit = (props) => {
  const { buttonProps } = props
  const history = useHistory()
  const { id } = useParams()
  const [value] = useDocumentData(
    firestore.collection(COLLECTIONS.WISHES).doc(id)
  )

  const [loading, setLoading] = useState(true)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const dataUsers =
        value.assign && (await getData(COLLECTIONS.USERS, value.assign))
      const data = value
      if (dataUsers) {
        data.assign = { ...dataUsers, id: value.assign }
      }
      setDataForDefaultValue(data)
      setLoading(false)
    }
    value && fetchData()
  }, [value])

  const onEditProduct = async (data) => {
    try {
      await setData(COLLECTIONS.WISHES, id, {
        id: id,
        name: data.name,
        description: data.description,
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        measures: data?.measures || ''
      })
      addData(COLLECTIONS.NOTIFICATIONS, {
      date: getTimestamp().now(),
      text: `You were assigned to buy '${data.name}' in Wishes list`,
      userId: [data.assign.id]
    })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  const onCancel = () => history.goBack()

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
        'measures'
      ]}
      onSubmit={onEditProduct}
      buttonProps={{
        onClickCancel: onCancel,
        ...buttonProps
      }}
    />
  )
}

WishEdit.propTypes = {}

export default WishEdit
