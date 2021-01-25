import { Typography } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const RoleSimpleView = (props) => {
  const { role } = props

  const [currentRole, setCurrentRole] = useState(role)

  return <Typography>{currentRole}</Typography>
}

RoleSimpleView.propTypes = {
  role: PropTypes.string.isRequired
}
RoleSimpleView.defaultProps = {}

export default RoleSimpleView
