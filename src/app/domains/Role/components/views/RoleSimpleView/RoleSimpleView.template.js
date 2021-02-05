import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const RoleSimpleView = (props) => {
  const { role, ...typography } = props

  return <Typography {...typography}>{role}</Typography>
}

RoleSimpleView.propTypes = {
  role: PropTypes.string.isRequired
}

export default RoleSimpleView
