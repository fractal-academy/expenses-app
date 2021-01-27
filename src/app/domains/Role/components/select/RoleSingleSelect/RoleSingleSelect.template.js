import { TextField, MenuItem } from '@material-ui/core'
import { useState } from 'react'
import { ROLE_VALUES } from 'app/constants'
import PropTypes from 'prop-types'

const RoleSingleSelect = (props) => {
  const { value, onChange } = props

  const [currentRole, setCurrentRole] = useState(value)

  return (
    <TextField
      select
      onChange={(e) => onChange(e, setCurrentRole)}
      value={currentRole}>
      {ROLE_VALUES.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </TextField>
  )
}

RoleSingleSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
RoleSingleSelect.defaultProps = {}

export default RoleSingleSelect
