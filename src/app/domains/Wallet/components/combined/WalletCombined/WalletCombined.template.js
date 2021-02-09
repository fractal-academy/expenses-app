import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletForm } from 'app/domains/Wallet/components/form/WalletForm'
import PropTypes from 'prop-types'

const WalletCombined = (props) => {
  const {
    idWallet,
    nameWallet,
    typeWallet,
    balance,
    member,
    currency,
    title,
    typeModalEdit,
    children
  } = props

  const [open, setOpen] = useState(children && !children)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  const form = useForm({
    defaultValues: {
      nameWallet: nameWallet,
      balance: balance,
      member: member,
      typeWallet: typeWallet,
      currency: currency
    }
  })

  const onSubmit = () => {
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
            balance: balance,
            member: member,
            currency: currency
          }}
          form={form}
          show={['nameWallet', 'typeWallet', 'balance', 'currency']}
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
WalletCombined.defaultProps = { title: 'Title', typeModalEdit: false }
export default WalletCombined
