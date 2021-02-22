import { useCallback, useState } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

//todo need width fix
const LoadingButton = (props) => {
  const { loading, startIcon, children, ...rest } = props
  const [size, setSize] = useState({ width: 0, height: 0 })
  const buttonRef = useCallback((node) => {
    if (node) {
      setSize({
        width: node.clientWidth,
        height: node.clientHeight
      })
    }
  }, [])
  return (
    <Button
      ref={buttonRef}
      {...rest}
      disabled={loading}
      color={loading && rest.variant ? 'default' : rest.color}
      startIcon={
        (startIcon && loading && (
          <CircularProgress color="primary" size={size.height / 2} />
        )) ||
        startIcon
      }>
      {!startIcon && loading ? (
        <CircularProgress color="primary" size={size.height / 1.5} />
      ) : (
        children
      )}
    </Button>
  )
}

export default LoadingButton
