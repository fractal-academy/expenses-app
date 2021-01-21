import { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const users = ['Olena', 'Dima', 'Sasha', 'Rolic', 'Max', 'Ruslana']
const MemberSingleSelect = (props) => {
  const [member, setMember] = useState(users[0])
  return (
    <Select value={member}>
      {users.map((user) => (
        <MenuItem key={user} value={user} onClick={() => setMember(user)}>
          {user}
        </MenuItem>
      ))}
    </Select>
  )
}

MemberSingleSelect.propTypes = {}
MemberSingleSelect.defaultProps = {}

export default MemberSingleSelect
