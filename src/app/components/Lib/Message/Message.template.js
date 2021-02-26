import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Message = (props) => {
  const {
    message, //message for alert
    severity, //type of alert success ot error
    open, //status open true or false
    onClose, //action on close
    vertical, //vertical position
    horizontal, //horizontal position
    variant, // variant filled or outlined
    autoHideDuration //duration for message
  } = props

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}>
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
  onClose: PropTypes.func,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
  variant: PropTypes.string,
  autoHideDuration: PropTypes.number
}
export default Message
