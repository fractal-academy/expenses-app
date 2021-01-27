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
    typographyProps,
    children,
    buttonSubmitProps,
    buttonCancelProps
  } = props

  return (
    <Dialog open={open} {...dialogProps}>
      <DialogTitle>
        <Typography {...typographyProps}>{title}</Typography>
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
  typographyProps: PropTypes.object,
  children: PropTypes.elementType,
  buttonSubmitProps: PropTypes.object.isRequired,
  buttonCancelProps: PropTypes.object.isRequired
}
export default Modal
