import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Message } from 'app/components/Lib/Message'
import { CartTable } from 'app/domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'

const CartAll = (props) => {
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })
  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }

  return (
    <>
      <CartTable setStatusMessage={setStatusMessage} />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.CART}
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

CartAll.propTypes = {}
CartAll.defaultProps = {}

export default CartAll
