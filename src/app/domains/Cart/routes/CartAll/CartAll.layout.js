import { COLLECTIONS } from 'app/constants'
import { CartTable } from 'app/domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'
import { useState } from 'react'
import { Message } from 'app/components/Lib'

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
        specificProductToAdd="Add product"
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

export default CartAll
