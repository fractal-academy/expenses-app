import { useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingButton = (props) => {
  const { loading, children, ...rest } = props
  const buttonRef = useRef(null)

  return (
    <Button
      ref={buttonRef}
      {...rest}
      color={loading ? 'default' : rest.color}
      style={
        buttonRef.current && {
          width: buttonRef.current.clientWidth,
          height: buttonRef.current.clientHeight
        }
      }>
      {loading ? (
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
