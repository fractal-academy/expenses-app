import { useState } from 'react'
import { MenuItem, Select, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import styles from './MemberSingleSelect.styles'

const useStyles = makeStyles(styles)

const users = ['Olena', 'Dima', 'Sasha', 'Rolic', 'Max', 'Ruslana']
const MemberSingleSelect = (props) => {
  const { onChange, value = 'Olena' } = props

  const classes = useStyles()

  const [currentUser, setCurrentUser] = useState(value)

  const handleSelect = (event) => {
    const selectedUser = event.target.value
    setCurrentUser(selectedUser)
    onChange && onChange(selectedUser, event)
  }

  return (
    <>
      <InputLabel id="demo-controlled-open-select-label">User</InputLabel>
      <Select
        className={classes.memberSingleSelects}
        value={currentUser}
        onChange={handleSelect}>
        {users.map((user) => (
          <MenuItem key={user} value={user}>
            {user}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

MemberSingleSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}
MemberSingleSelect.defaultProps = {}

export default MemberSingleSelect
