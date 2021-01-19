import { MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { ROLE_VALUES } from 'app/constants'

const useStyles = makeStyles({
  roleSingleSelect: {
    minWidth: 100,
    textAlign: 'center'
  }
})

const RoleSingleSelect = (props) => {
  const [currentRole, setCurrentRole] = useState('admin')
  const classes = useStyles()

  return (
    <Select
      className={classes.roleSingleSelect}
      value={currentRole}
      onChange={(event) => setCurrentRole(event.target.value)}>
      {ROLE_VALUES.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Select>
  )
}

RoleSingleSelect.propTypes = {}
RoleSingleSelect.defaultProps = {}

export default RoleSingleSelect
