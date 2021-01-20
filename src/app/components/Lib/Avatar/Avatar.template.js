import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Avatar.styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(styles)

const CustomAvatar = (props) => {
  const classes = useStyles()
  const size = classes[props.size]
  return (
    <Avatar className={size} alt={props.alt} src={props.src}>
      {props.children}
    </Avatar>
  )
}

CustomAvatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default CustomAvatar
