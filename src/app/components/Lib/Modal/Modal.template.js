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
  const { open, title, children, buttonSubmitProps, buttonCancelProps } = props

  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography>{title}</Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button {...buttonCancelProps}>
          {buttonCancelProps?.text ? buttonCancelProps.text : 'Cancel'}
        </Button>
        <Button {...buttonSubmitProps}>
          {buttonSubmitProps?.text ? buttonSubmitProps.text : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  buttonSubmitProps: PropTypes.object.isRequired,
  buttonCancelProps: PropTypes.object.isRequired
}
export default Modal
