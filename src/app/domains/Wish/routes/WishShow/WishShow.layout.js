import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'
import { Spinner } from 'app/components/Lib'
import { firestore } from 'app/services/Firestore'
import { Message } from 'app/components/Lib/Message'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ProductAdvancedView } from 'domains/Product/components/views'

const WishShow = (props) => {
  const { id } = useParams()

  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.WISHES).doc(id)
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
        type="wish"
        data={value.data()}
        id={id}
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

export default WishShow
