import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { MenuItem } from '@material-ui/core'
import { Select } from 'components/Lib'
import { getData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const MemberSingleSelect = (props) => {
  const [currentUser, setCurrentUser] = useState('')
  const [members, setMembers] = useState([])

  //TODO getData need filter all !pending users
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getData(COLLECTIONS.USERS)
      const users = Object.values(res)
      if (users) {
        setMembers(users)
        setCurrentUser(users[0].email)
      }
    }
    fetchUsers()
  }, [])

  return (
    <Select data={members} value={currentUser} {...props}>
      {(item) => (
        <MenuItem key={item.email} value={item.email}>
          {item.email}
        </MenuItem>
      )}
    </Select>
  )
}

MemberSingleSelect.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default MemberSingleSelect
