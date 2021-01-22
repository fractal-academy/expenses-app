import { Typography } from '@material-ui/core'

const RoleSimpleView = (props) => {
  let { role } = props
  role = role || 'admin'

  return <Typography>{role}</Typography>
}

RoleSimpleView.propTypes = {}
