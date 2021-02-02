import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useStyle } from './ProgressBar.styles'

const ProgressBar = (props) => {
  const { value } = props
  const classes = useStyle(props)
  const fill = value > 100 ? 100 : value
  return (
    <LinearProgress
      variant="determinate"
      value={fill}
      className={`${classes.root} ${classes.colorPrimary}`}
    />
  )
}
export default ProgressBar
