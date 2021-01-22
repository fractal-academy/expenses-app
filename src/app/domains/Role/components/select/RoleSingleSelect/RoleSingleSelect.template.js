import { MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { ROLE, ROLE_VALUES } from 'app/constants'

const useStyles = makeStyles({
  roleSingleSelect: {
    minWidth: 100,
    textAlign: 'center'
  }
})

const RoleSingleSelect = (props) => {
  const { onChange } = props
  const [currentRole, setCurrentRole] = useState('admin')

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
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Select>
  )
}

RoleSingleSelect.propTypes = {}
RoleSingleSelect.defaultProps = {}

export default RoleSingleSelect
