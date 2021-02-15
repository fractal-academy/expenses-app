import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import { firestore, getData, setData } from 'app/services'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import React, { useEffect, useState } from 'react'

const WishEdit = (props) => {
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

  if (loading) {
    return <Spinner />
  }
  const onEditProduct = async (data) => {
    try {
      await setData(COLLECTIONS.WISHES, id, {
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        description: data.description,
        id: id,
        price: data.price,
        measures: data?.measures || '',
        name: data.name,
        quantity: data.quantity
      })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  const onCancel = () => history.goBack()

  if (!dataForDefaultValue) {
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
      buttonProps={{ onClickCancel: onCancel }}
    />
  )
}

WishEdit.propTypes = {}

export default WishEdit
