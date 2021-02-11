import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Message = (props) => {
  const {
    message,
    severity,
    open,
    handleClose,
    vertical,
    horizontal,
    variant,
    autoHideDuration,
    ...rest
  } = props

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}>
      <Alert variant={variant} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

Message.propTypes = {
  message: PropTypes.string,
  severity: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  horizontal: PropTypes.string,
  variant: PropTypes.string,
  autoHideDuration: PropTypes.number
}
export default Message
