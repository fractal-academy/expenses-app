import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'

const Modal = (props) => {
  const {
    open,
    title,
    children,
    onCancel,
    onSubmit,
    buttonSubmitProps,
    buttonCancelProps
  } = props

  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography>{title}</Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} {...buttonCancelProps}>
          {buttonCancelProps?.text ? buttonCancelProps.text : 'Cancel'}
        </Button>
        <Button onClick={onSubmit} {...buttonSubmitProps}>
          {buttonSubmitProps?.text ? buttonSubmitProps.text : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  buttonSubmitProps: PropTypes.object,
  buttonCancelProps: PropTypes.object
}
export default Modal
