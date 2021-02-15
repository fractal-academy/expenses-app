import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { firestore, getData, setData } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import React, { useEffect, useState } from 'react'

const RegularProductEdit = (props) => {
  const history = useHistory()
  const { id } = useParams()
  const [value, load] = useDocumentData(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS).doc(id)
  )
  const [loading, setLoading] = useState(true)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()
  console.log('value reqgProduct', value)
  useEffect(() => {
    const fetchData = async () => {
      const dataUsers =
        value.assign && (await getData(COLLECTIONS.USERS, value.assign))
      const dataMeasures =
        value.measures &&
        (await getData(COLLECTIONS.MEASURES, value.measuresId))
      console.log('dataMeasures', dataMeasures)
      setDataForDefaultValue({
        ...value,
        assign: dataUsers,
        measure: dataMeasures
      })
      setLoading(false)
    }
    value && fetchData()
  }, [value])
  const onEditProduct = async (data) => {
    try {
      await setData(COLLECTIONS.REGULAR_PRODUCTS, id, {
        firstName: data?.assign?.firstName || '',
        assign: data?.assign?.id || '',
        category: data.category,
        description: data.description,
        remind: data.remind,
        id: id,
        price: data.price,
        measures: data?.measures?.measure || '',
        measuresId: data?.measures?.id || '',
        name: data.name,
        quantity: data.quantity
      })
      history.goBack()
    } catch (error) {
      console.log(error)
    }
  }
  if (loading) {
    return <Spinner />
  }
  if (!dataForDefaultValue) {
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
