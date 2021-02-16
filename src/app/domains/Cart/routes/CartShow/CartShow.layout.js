import { useState } from 'react'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner, Message } from 'app/components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const CartShow = () => {
  const { id } = useParams()

  const [value, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.CART).doc(id)
  )

  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })
  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }
  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <ProductAdvancedView
        id={id}
        type="cart"
        data={value}
        setStatusMessage={setStatusMessage}
      />
      <Message
        open={statusMessage.open}
        message={statusMessage.message}
        vertical="top"
        horizontal="center"
        autoHideDuration={1500}
        variant="filled"
        severity={statusMessage.type}
        onClose={handleClose}
      />
    </>
  )
}

CartShow.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.object,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  purchasedDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default CartShow
