import PropTypes from 'prop-types'
import { useState } from 'react'
import { MenuItem } from '@material-ui/core'
import { Select } from 'components/Lib'

const MemberSingleSelect = (props) => {
  const [currentUser, setCurrentUser] = useState('')
  const [members, setMembers] = useState([])

  //TODO refactor to service
  // useEffect(() => {
  //   STORE.collection('users')
  //     .get()
  //     .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  //     .then((useData) => {
  //       setMembers(useData)
  //       setCurrentUser(useData[0].email)
  //     })
  // }, [])

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
