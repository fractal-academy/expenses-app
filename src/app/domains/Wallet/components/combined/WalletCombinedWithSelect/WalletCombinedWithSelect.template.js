import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { WalletFormWithSelect } from 'app/domains/Wallet/components/form/WalletFormWithSelect'
import PropTypes from 'prop-types'

const WalletCombinedWithSelect = (props) => {
  const { title, typeModalEdit, children } = props

  const [open, setOpen] = useState(children && !children)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)
  const form = useForm({
    defaultValues: {
      wallet: {
        id: '123',
        data: {
          123: {
            nameWallet: 'Olena`s wallet',
            balance: '800',
            currency: 'USD'
          },
          456: { nameWallet: 'wallet', balance: '200', currency: 'USD' },
          789: {
            nameWallet: '1wallet',
            balance: '200000',
            currency: 'USD'
          }
        }
      }
    }
  })

  const onSubmit = () => {
    setOpen(false)
  }
  const submitForm = () => form.submit()
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
          onClick: submitForm
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <WalletFormWithSelect
          formData={{
            wallet: {
              id: '123',
              data: {
                123: {
                  nameWallet: 'Olena`s wallet',
                  balance: '800',
                  currency: 'USD'
                },
                456: { nameWallet: 'wallet', balance: '200', currency: 'USD' },
                789: {
                  nameWallet: '1wallet',
                  balance: '200000',
                  currency: 'USD'
                }
              }
            }
          }}
          show={['wallet']}
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
