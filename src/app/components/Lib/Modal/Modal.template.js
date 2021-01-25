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
    setOpen,
    title,
    children,
    onClick,
    onChange,
    onOk,
    onCancel
  } = props

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <DialogTitle>
        <Typography>{title}</Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={onCancel}
          variant="contained"
          size="small"
          color="primary">
          Cancel
        </Button>
        <Button
          onClick={onOk}
          variant="contained"
          size="small"
          color="secondary"
          type="submit">
          Save
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
