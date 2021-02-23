import React, { useState } from 'react'
import { Snackbar, Switch, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Alert } from '@material-ui/lab'
import { Modal, FabButton } from 'app/components/Lib'
import { MeasureSimpleForm } from 'domains/Measure/components/forms'
import PropTypes from 'prop-types'
import { firestore, setData } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { Row } from '@qonsoll/react-design'
import { deleteData } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import { Logger } from 'app/utils'

const MeasureModalWithForm = (props) => {
  // [INTERFACES]
  const { title, children } = props
  // [STATE]
  const [open, setOpen] = useState(children && !children)
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
  const [openSnackbarError, setOpenSnackbarError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [switchState, setSwitchState] = useState(true)

  // [CUSTOM_HOOKS]
  const form = useForm({})
  const user = useSession()

  // [HELPER_FUNCTIONS]
  const onRemoveMeasure = async (data) => {
    try {
      const { measureSelect } = data
      setLoading(true)
      Logger(
        'Delete measure',
        `Measure '${measureSelect.measure}' was deleted`,
        user
      )
      await deleteData(COLLECTIONS.MEASURES, measureSelect.id)
      form.reset({})
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    setSwitchState(true)
    setOpen(false)
  }
  const onAddMeasure = async (data) => {
    try {
      setLoading(true)
      const id = firestore.collection(COLLECTIONS.MEASURES).doc().id
      await setData(COLLECTIONS.MEASURES, id, {
        id: id,
        measure: data.measure
      })
      Logger('Add new measure', `Measure '${data.measure}' was added`, user)
      form.reset()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    setSwitchState(true)

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
    setSwitchState(true)
  }

  // [TEMPLATE]
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
          text: switchState ? 'Submit' : 'Delete',
          variant: 'contained',
          color: 'primary',
          onClick: submitForm,
          loading
        }}
        buttonCancelProps={{
          text: 'Cancel',
          variant: 'contained',
          onClick: handleClose
        }}>
        <Row v="center" mb={2}>
          <Typography>Add</Typography>
          <Switch onChange={() => setSwitchState(!switchState)} />
          <Typography>Remove</Typography>
        </Row>
        {switchState ? (
          <>
            <Row h="center">
              <Typography variant="h5" align="center">
                Add measure
              </Typography>
            </Row>
            <MeasureSimpleForm
              form={form}
              show={['measure']}
              onSubmit={onAddMeasure}
              buttonProps={{ visible: false }}
            />
          </>
        ) : (
          <>
            <Row h="center">
              <Typography variant="h5" align="center">
                Remove measure
              </Typography>
            </Row>
            <MeasureSimpleForm
              form={form}
              show={['measureSelect']}
              onSubmit={onRemoveMeasure}
              buttonProps={{ visible: false }}
            />
          </>
        )}
      </Modal>
    </>
  )
}
MeasureModalWithForm.propTypes = {
  title: PropTypes.string.isRequired,
  typeModalEdit: PropTypes.bool,
  children: PropTypes.element
}
MeasureModalWithForm.defaultProps = { title: 'Add new measure' }
export default MeasureModalWithForm
