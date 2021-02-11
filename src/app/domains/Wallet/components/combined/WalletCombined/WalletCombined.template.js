import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, FabButton } from 'app/components/Lib'
import { Message } from 'app/components/Lib/Message'
import { WalletForm } from 'app/domains/Wallet/components/form/WalletForm'
import { setData } from 'app/services'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'
import { useSession } from 'app/context/SessionContext/hooks'

const WalletCombined = (props) => {
  const {
    idWallet,
    nameWallet,
    balance,
    idCurrency,
    idMember,
    privateWallet,
    title,
    typeModalEdit,
    children
  } = props

  const [open, setOpen] = useState(children && !children)
  const [statusMessage, setStatusMessage] = useState({
    open: false,
    message: '',
    type: ''
  })

  const handleClose = () => {
    setStatusMessage({ open: false, message: '', type: '' })
  }

  const session = useSession()

  const form = useForm({
    defaultValues: {
      idWallet,
      nameWallet,
      balance,
      idCurrency,
      privateWallet,
      idMember
    }
  })

  const onSubmit = async (data) => {
    const { privateWallet } = data

    !!privateWallet && idMember
      ? (data.idMember = idMember)
      : !!privateWallet
      ? (data.idMember = md5(session.email))
      : delete data.idMember

    if (typeof data.idCurrency === 'object')
      data.idCurrency = data.idCurrency.cc

    try {
      await setData(COLLECTIONS.WALLETS, idWallet, data)
      setStatusMessage({
        open: true,
        message: typeModalEdit ? 'Edit' : 'Done',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }

    setOpen(false)
  }

  const formSubmit = () => form.submit()

  const handleClickOpen = () => {
    setOpen(true)
  }

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
          type: 'submit',
          onClick: formSubmit
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <WalletForm
          form={form}
          show={['nameWallet', 'balance', 'idCurrency', 'privateWallet']}
          onSubmit={onSubmit}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}
WalletCombined.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element
}
WalletCombined.defaultProps = {
  typeModalEdit: false
}
export default WalletCombined
