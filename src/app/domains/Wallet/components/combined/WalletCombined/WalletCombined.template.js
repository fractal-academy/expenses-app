import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'app/domains/Wallet/components/form/WalletForm'
import { setData } from 'app/services'
import PropTypes from 'prop-types'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services'

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
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)
  const [user] = useAuthState(auth)

  const form = useForm({
    defaultValues: {
      idWallet: idWallet,
      nameWallet: nameWallet,
      balance: balance,
      idCurrency: idCurrency,
      privateWallet: privateWallet,
      idMember: idMember
    }
  })

  const onSubmit = async (data) => {
    const { privateWallet } = data

    !!privateWallet && idMember
      ? (data.idMember = idMember)
      : !!privateWallet
      ? (data.idMember = md5(user.email))
      : delete data.idMember

    if (typeof data.idCurrency === 'object')
      data.idCurrency = data.idCurrency.cc

    try {
      await setData(COLLECTIONS.WALLETS, idWallet, data)
      setOpenSnackbarSuccess(true)
    } catch (error) {
      setOpenSnackbarError(true)
    }

    setOpen(false)
  }

  const formSubmit = () => form.submit()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpenSnackbarSuccess(false)
    setOpenSnackbarError(false)
    setOpen(false)
  }
  return (
    <>
      {(children &&
        React.cloneElement(children, { onClick: handleClickOpen })) || (
        <FabButton onClick={handleClickOpen} />
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarSuccess}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert variant="filled" severity="error">
          This is an error message!
        </Alert>
      </Snackbar>

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
          formData={{
            nameWallet: nameWallet,
            idMember: idMember,
            balance: balance,
            privateWallet: privateWallet,
            idCurrency: idCurrency
          }}
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
