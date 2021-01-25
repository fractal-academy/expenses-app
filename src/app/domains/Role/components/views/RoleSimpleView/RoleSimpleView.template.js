import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const RoleSimpleView = (props) => {
  const { role } = props

  return <Typography>{role}</Typography>
}

RoleSimpleView.propTypes = {
  role: PropTypes.oneOf(['admin', 'user', 'observer'])
}
RoleSimpleView.defaultProps = {}

export default RoleSimpleView
