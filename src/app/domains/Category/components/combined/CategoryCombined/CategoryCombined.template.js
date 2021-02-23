import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { CategoryForm } from 'domains/Category/components/form'
import PropTypes from 'prop-types'
import { addData, setData, getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { Logger } from 'app/utils'
import { useSession } from 'app/context/SessionContext'
import {
  useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'

const CategoryCombined = (props) => {
  // INTERFACE
  const { title, typeModalEdit, children, categoryId, showName = true } = props

  // STATE
  const [open, setOpen] = useState(!!children && !children)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)

  // [ADDITIONAL_HOOKS]
  const form = useForm({})
  const user = useSession()
  // [ADDITIONAL_HOOKS]
  const [value, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.CATEGORIES),
    {
      idField: 'id'
    }
  )
  // HELPER FUNCTIONS
  const onAddCategory = (data) => {
    addData(COLLECTIONS.CATEGORIES, {
      nameCategory: data.nameCategory,
      colorCategory: data.color,
      spent: 0,
      budget: Number(data.budgetLimit)
    }).then(
      () =>
        Logger('New category', `Category ${data.nameCategory} was added`, user),
      setOpen(false)
    )
  }

  const onEditCategory = (data) => {
    setData(COLLECTIONS.CATEGORIES, categoryId, {
      colorCategory: data.color,
      budget: Number(data.budgetLimit)
    }).then(
      () =>
        Logger(
          'Edit category',
          `Category ${value?.nameCategory} was edited`,
          user
        ),
      setOpen(false)
    )
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

  // TEMPLATE
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
          show={[
            showName && 'nameCategory',
            'budgetLimit',
            'currency',
            'color'
          ]}
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
