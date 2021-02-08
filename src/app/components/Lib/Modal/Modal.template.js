import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui/core'
import LoadingButton from '@material-ui/lab/LoadingButton'

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
      <DialogTitle disableTypography>
        <Typography component="h2" {...titleTypographyProps}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <LoadingButton
          pending={buttonCancelProps.loading}
          {...buttonCancelProps}>
          {buttonCancelProps?.text ? buttonCancelProps.text : 'Cancel'}
        </LoadingButton>

        <LoadingButton
          pending={buttonSubmitProps.loading}
          {...buttonSubmitProps}>
          {buttonSubmitProps?.text ? buttonSubmitProps.text : 'Submit'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  dialogProps: PropTypes.object,
  title: PropTypes.string,
  titleTypographyProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  buttonSubmitProps: PropTypes.object.isRequired,
  buttonCancelProps: PropTypes.object.isRequired,
  loading: PropTypes.bool
}
export default Modal
