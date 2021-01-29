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
    dialogProps,
    title,
    titleTypographyProps,
    children,
    buttonSubmitProps,
    buttonCancelProps
  } = props

  return (
    <Dialog open={open} onClose={buttonCancelProps.onClick} {...dialogProps}>
      <DialogTitle>
        <Typography {...titleTypographyProps}>{title}</Typography>
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
  dialogProps: PropTypes.object,
  title: PropTypes.string,
  titleTypographyProps: PropTypes.object,
  children: PropTypes.elementType,
  buttonSubmitProps: PropTypes.object.isRequired,
  buttonCancelProps: PropTypes.object.isRequired
}
export default Modal
