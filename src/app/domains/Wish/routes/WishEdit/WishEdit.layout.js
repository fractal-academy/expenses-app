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
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext'

const WishEdit = (props) => {
  // [INTERFACES]
  const { buttonProps, collectionName, pushTo } = props

  // [COMPONENT_STATE_HOOKS]
  const [loading, setLoading] = useState(true)
  const [editLoading, setEditLoading] = useState(false)
  const [dataForAssign, setDataForAssign] = useState()

  // [ADDITIONAL_HOOKS]
  const history = useHistory()
  const { id } = useParams()
  const [value] = useDocumentData(
    firestore.collection(collectionName || COLLECTIONS.WISHES).doc(id)
  )
  const user = useSession()

  // [HELPER_FUNCTIONS]
  const onEditProduct = async (data) => {
    setEditLoading(true)
    try {
      var description = `Wish '${value?.name}' was edited.
        ${value?.name === data.name ? '' : `Name changed on '${data.name}'`}`
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
      Logger('Edit wish', description, user)
      addData(COLLECTIONS.NOTIFICATIONS, {
        date: getTimestamp().now(),
        text: `You were assigned to buy '${data.name}' in Wishes list`,
        userId: [data.assign.id],
        viewed: { [data.assign.id]: false }
      })
    } catch (error) {
      console.log(error)
    }
    setEditLoading(false)
    onCancel()
  }

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
      setDataForAssign(data)
      setLoading(false)
    }
    value && fetchData()
  }, [value])

  if (loading || !dataForAssign) {
    return <Spinner />
  }

  // [TEMPLATE]
  return (
    <ProductAdvancedForm
      formData={dataForAssign}
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
