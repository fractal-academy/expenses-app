import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui/core'
import { LoadingButton } from 'app/components/Lib'

import PropTypes from 'prop-types'

const Modal = (props) => {
  const {
    open,
    dialogProps,
    title,
    titleTypographyProps,
    children,
    buttonSubmitProps,
    buttonCancelProps,
    actions = false
  } = props
  const { loading, ...restButtonSubmitProps } = buttonSubmitProps
  return (
    <Dialog open={open} onClose={buttonCancelProps.onClick} {...dialogProps}>
      <DialogTitle disableTypography>
        <Typography component="h2" {...titleTypographyProps}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>

      <DialogActions>
        {!actions ? (
          <>
            <Button {...buttonCancelProps}>
              {buttonCancelProps.text || 'Cancel'}
            </Button>

            <LoadingButton loading={loading} {...restButtonSubmitProps}>
              {buttonSubmitProps.text || 'Submit'}
            </LoadingButton>
          </>
        ) : (
          actions
        )}
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
  actions: PropTypes.element
}
export default Modal
