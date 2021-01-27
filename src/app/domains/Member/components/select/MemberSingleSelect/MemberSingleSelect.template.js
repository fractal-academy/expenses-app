import { useState, useEffect } from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { STORE } from 'app/constants'

const MemberSingleSelect = (props) => {
  const { onChange } = props
  const [currentUser, setCurrentUser] = useState('')
  const [members, setMembers] = useState([])

  useEffect(() => {
    STORE.collection('users')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
      .then((useData) => {
        setMembers(useData)
        setCurrentUser(useData[0].email)
      })
  }, [])

  const handleSelect = (event) => {
    const selectedUser = event.target.value
    setCurrentUser(selectedUser)
    onChange && onChange(selectedUser, event)
  }

  return (
    <TextField select onChange={handleSelect} value={currentUser}>
      {members.length &&
        members.map((item) => (
          <MenuItem key={item.email} value={item.email}>
            {item.email}
          </MenuItem>
        ))}
    </TextField>
  )
}

MemberSingleSelect.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default MemberSingleSelect
