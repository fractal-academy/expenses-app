import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'

import {
  firestore,
  setData,
  addData,
  getData,
  getTimestamp
} from 'app/services/Firestore'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { useLogger } from 'app/hooks'

const WishEdit = (props) => {
  // [INTERFACES]
  const { buttonProps, collectionName, pushTo } = props

  // [COMPONENT_STATE_HOOKS]
  const [loading, setLoading] = useState(true)
  const [editLoading, setEditLoading] = useState(false)
  const [dataForDefaultValue, setDataForDefaultValue] = useState()

  // [ADDITIONAL_HOOKS]
  const history = useHistory()
  const { id } = useParams()
  const [value] = useDocumentData(
    firestore.collection(collectionName || COLLECTIONS.WISHES).doc(id)
  )

  //[CUSTOM_HOOKS]
  const onEditProductLogger = useLogger('Edit', 'One of products was edited')

  // [HELPER_FUNCTIONS]
  const onEditProduct = onEditProductLogger(async (data) => {
    setEditLoading(true)
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
    } catch (error) {
      console.log(error)
    }
    setEditLoading(false)
    onCancel()
  })

  const onCancel = () => {
    if (pushTo) {
      history.replace(pushTo)
    } else {
      history.goBack()
    }
  }

  // [USE_EFFECTS]
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

  if (loading || !dataForDefaultValue) {
    return <Spinner />
  }

  // [TEMPLATE]
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
        buttonPropsSubmit: {
          loading: editLoading
        },
        ...buttonProps
      }}
    />
  )
}

WishEdit.propTypes = {
  buttonProps: PropTypes.object,
  collectionName: PropTypes.string,
  pushTo: PropTypes.string
}

export default WishEdit
