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
          Cancel
        </Button>
        <Button onClick={onSubmit} type="submit" {...buttonSubmitProps}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
Modal.propTypes = {
  title: PropTypes.string
}
Modal.defaultProps = {}
export default Modal
