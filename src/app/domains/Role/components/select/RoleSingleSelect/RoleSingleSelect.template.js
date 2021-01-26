import { MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { ROLE_VALUES } from 'app/constants'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  roleSingleSelect: {
    minWidth: 100,
    textAlign: 'center'
  }
})

const RoleSingleSelect = (props) => {
  const { onChange, value } = props

  const [currentRole, setCurrentRole] = useState(value)

  const classes = useStyles()

  const handleSelect = (event) => {
    const selectedRole = event.target.value
    setCurrentRole(selectedRole)
    onChange && onChange(selectedRole, event)
  }

  return (
    <Select
      className={classes.roleSingleSelect}
      value={currentRole}
      onChange={handleSelect}>
      {ROLE_VALUES.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}

RoleSingleSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default RoleSingleSelect
