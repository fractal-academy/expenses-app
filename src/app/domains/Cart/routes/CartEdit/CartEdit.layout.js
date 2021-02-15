import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import { firestore, getData, setData } from 'app/services'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import React, { useEffect, useState } from 'react'

const CartEdit = (props) => {
  const history = useHistory()
  const { id } = useParams()
  const [value, load] = useDocumentData(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )
  const [loading, setLoading] = useState(true)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const dataUsers =
        value.assign && (await getData(COLLECTIONS.USERS, value.assign))
      const dataMeasures =
        value.measures &&
        (await getData(COLLECTIONS.MEASURES, value.measures.id))
      setDataForDefaultValue({
        ...value,
        assign: dataUsers,
        measure: dataMeasures
      })
      setLoading(false)
    }
    value && fetchData()
  }, [value])
  if (loading) {
    return <Spinner />
  }

  const onEditProduct = async (data) => {
    try {
      await setData(COLLECTIONS.CART, id, {
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        dateBuy: data.dateBuy,
        description: data.description,
        id: id,
        price: data.price,
        measures: data?.measures?.measure || '',
        name: data.name,
        quantity: data.quantity
      })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  if (!dataForDefaultValue) {
    return <Spinner />
  }
  const onCancel = () => history.goBack()

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
