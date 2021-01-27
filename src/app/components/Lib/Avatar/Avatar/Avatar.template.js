import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Avatar.styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(styles)

const sizeAvatar = ['sm', 'md', 'lg']

const CustomAvatar = (props) => {
  const { alt, src, children } = props
  const classes = useStyles()
  const size = classes[props.size]

  return (
    <Avatar className={size} alt={alt} src={src}>
      {children}
    </Avatar>
  )
}

CustomAvatar.propTypes = {
  size: PropTypes.oneOf(sizeAvatar),
  alt: PropTypes.string,
  src: PropTypes.string
}

export default CustomAvatar
