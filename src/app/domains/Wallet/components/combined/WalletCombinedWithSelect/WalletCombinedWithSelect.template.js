import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'domains/Wallet/components/form/WalletForm'
import { useForm } from 'react-hook-form'
import { Message } from 'app/components/Lib/Message'
const WalletCombinedWithSelect = (props) => {
  // INTERFACE
  const { title, typeModalEdit, children } = props

  // STATE
  const [open, setOpen] = useState(children && !children)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })

  // CUSTOM HOOKS
  const form = useForm({})
  const formSubmit = () => form.submit()

  // HELPER FUNCTIONS
  const onSubmit = async (data) => {
    console.log('data', data)
    try {
      setLoading(true)
      setStatusMessage({
        open: true,
        message: 'Added',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
    setLoading(false)
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
    setOpen(false)
  }

  // TEMPLATE
  return (
    <>
      {(children &&
        React.cloneElement(children, { onClick: handleClickOpen })) || (
        <FabButton onClick={handleClickOpen} />
      )}
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

      <Modal
        open={open}
        title={title}
        titleTypographyProps={{ variant: 'h5' }}
        dialogProps={{
          maxWidth: 'sm',
          fullWidth: true
        }}
        buttonSubmitProps={{
          text: typeModalEdit ? 'Save' : 'Submit',
          variant: 'contained',
          color: 'primary',
          onClick: formSubmit,
          loading
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <WalletForm
          form={form}
          show={['select']}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}
WalletCombinedWithSelect.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element
}
export default WalletCombinedWithSelect
