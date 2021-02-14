import { useState } from 'react'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { Message } from 'app/components/Lib/Message'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const CartShow = (props) => {
  const { id } = useParams()

  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )

  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })
  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ProductAdvancedView
        id={id}
        type="cart"
        data={value.data()}
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
