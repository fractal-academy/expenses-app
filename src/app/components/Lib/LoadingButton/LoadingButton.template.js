import { useRef } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingButton = (props) => {
  const { loading, startIcon, children, ...rest } = props
  const buttonRef = useRef(null)

  return (
    <Button
      ref={buttonRef}
      {...rest}
      color={loading && rest.variant ? 'default' : rest.color}
      style={
        buttonRef.current && {
          width: buttonRef.current.clientWidth,
          height: buttonRef.current.clientHeight
        }
      }
      startIcon={
        (startIcon && loading && (
          <CircularProgress
            color="inherit"
            size={buttonRef.current.clientHeight / 2}
          />
        )) ||
        startIcon
      }>
      {loading && !startIcon ? (
        <CircularProgress
          color="inherit"
          size={buttonRef.current.clientHeight / 1.5}
        />
      ) : (
        children
      )}
    </Button>
  )
}

export default LoadingButton
