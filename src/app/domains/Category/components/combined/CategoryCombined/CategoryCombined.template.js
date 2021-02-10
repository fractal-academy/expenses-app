import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { CategoryForm } from 'domains/Category/components/form'
import PropTypes from 'prop-types'
import { addData, setData } from 'app/services/Firestore'

const CategoryCombined = (props) => {
  // INTERFACE
  const { title, typeModalEdit, children, categoryId } = props

  // STATE
  const [open, setOpen] = useState(!!children && !children)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  // CUSTOM HOOKS
  const form = useForm({})

  // HELPER FUNCTIONS
  const onAddCategory = (data) => {
    addData('categories', {
      nameCategory: data.nameCategory,
      colorCategory: data.color,
      currency: data.currency.cc,
      spent: 0,
      budget: Number(data.budgetLimit)
    }).then(() => setOpen(false))
  }

  const onEditCategory = (data) => {
    setData('categories', categoryId, {
      nameCategory: data.nameCategory,
      colorCategory: data.color,
      currency: data.currency.cc,
      spent: 0,
      budget: Number(data.budgetLimit)
    }).then(() => setOpen(false))
  }

  const submitForm = () => {
    form.submit()
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpenSnackbarSuccess(false)
    setOpenSnackbarError(false)
    setOpen(false)
  }

  // INTERFACE
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
        <CategoryForm
          form={form}
          show={['nameCategory', 'budgetLimit', 'color', 'currency']}
          onSubmit={typeModalEdit ? onEditCategory : onAddCategory}
          buttonProps={{ visible: false }}
        />
      </Modal>
    </>
  )
}
CategoryCombined.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element,
  categoryId: PropTypes.string
}
CategoryCombined.defaultProps = { title: 'Title', typeModalEdit: false }
export default CategoryCombined
