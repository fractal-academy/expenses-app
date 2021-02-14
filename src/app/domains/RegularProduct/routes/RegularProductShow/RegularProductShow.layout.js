import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'
import { useState } from 'react'
import { firestore } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Message, Spinner } from 'app/components/Lib'

const RegularProductShow = (props) => {
  const { id } = useParams()

  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS).doc(id)
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
        type="product"
        id={id}
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

RegularProductShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  reminderDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default RegularProductShow
