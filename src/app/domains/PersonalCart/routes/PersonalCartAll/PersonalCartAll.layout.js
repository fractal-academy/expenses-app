import { useState } from 'react'
import { Message } from 'app/components/Lib'
import { PersonalCartTable } from 'app/domains/PersonalCart/components/table'

const PersonalCartAll = (props) => {
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
      <PersonalCartTable setStatusMessage={setStatusMessage} />

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

PersonalCartAll.propTypes = {}

export default PersonalCartAll
