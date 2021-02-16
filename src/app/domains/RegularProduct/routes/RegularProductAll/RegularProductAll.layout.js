import { RegularProductsTable } from 'domains/RegularProduct/components/table'
import { Container } from '@qonsoll/react-design'
import { RegularProductCombined } from 'domains/RegularProduct/components/combined'
import { useState } from 'react'
import { Message } from 'app/components/Lib'

const RegularProductAll = (props) => {
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })
  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }
  return (
    <Container p={2}>
      <RegularProductsTable setStatusMessage={setStatusMessage} />
      <RegularProductCombined title="Add new regular product" />
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
    </Container>
  )
}

RegularProductAll.propTypes = {}
RegularProductAll.defaultProps = {}

export default RegularProductAll
