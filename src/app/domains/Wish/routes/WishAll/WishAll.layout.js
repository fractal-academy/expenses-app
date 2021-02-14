import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Message } from 'app/components/Lib/Message'
import { WishTable } from 'app/domains/Wish/components/table'
import { ProductCombinedForm } from 'domains/Product/components/combined/ProductCombinedForm'

const WishAll = (props) => {
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
      <WishTable setStatusMessage={setStatusMessage} />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.WISHES}
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

WishAll.propTypes = {}
WishAll.defaultProps = {}

export default WishAll
