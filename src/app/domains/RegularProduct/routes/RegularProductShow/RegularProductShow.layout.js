import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { DropdownItem, Spinner, Message } from 'app/components/Lib'
import { QRCombinedModal } from 'qr-module/components/combined/modal'
import { ProductAdvancedView } from 'app/domains/Product/components/views'
import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'

const RegularProductShow = (props) => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const [product, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.REGULAR_PRODUCTS).doc(id)
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
  // first element in dropdown
  const qr = (
    <QRCombinedModal>
      <DropdownItem divider>
        <Typography>Get QR</Typography>
      </DropdownItem>
    </QRCombinedModal>
  )
  // [TEMPLATE]
  return (
    <>
      <ProductAdvancedView
        type="product"
        id={id}
        data={product}
        dropdownItem={qr}
        setStatusMessage={setStatusMessage}
        {...props}
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
