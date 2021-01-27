import { MenuItem, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { ROLE_VALUES } from 'app/constants'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  roleSingleSelect: {
    minWidth: 100,
    textTransform: 'capitalize'
  }
})

const RoleSingleSelect = (props) => {
  const {
    menuItemProps,
    onChange,
    value,
    errorText,
    label,
    inputProps,
    ...rest
  } = props

  const [currentRole, setCurrentRole] = useState(value)

  const classes = useStyles()

  const handleSelect = (event) => {
    const selectedRole = event.target.value
    setCurrentRole(selectedRole)
    onChange && onChange(selectedRole, event)
  }

  return (
    <TextField
      select
      className={classes.roleSingleSelect}
      label={label}
      value={currentRole}
      onChange={handleSelect}
      helperText={errorText}
      {...inputProps}
      {...rest}>
      {ROLE_VALUES.map((item) => (
        <MenuItem
          {...menuItemProps}
          value={item}
          key={item}
          className={classes.roleSingleSelect}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  )
}

RoleSingleSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default RoleSingleSelect
