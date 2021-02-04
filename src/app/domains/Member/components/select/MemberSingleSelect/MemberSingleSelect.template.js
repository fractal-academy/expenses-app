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

  const member = [
    { email: 'okrdima@gmial.com:' },
    { email: 'okrdima1@gmial.com' },
    { email: 'okrdima2@gmial.com' },
    { email: 'okrdima3@gmial.com' },
    { email: 'okrdima4@gmial.com' }
  ]
  return (
    <Select data={member} value={member[0]} {...props}>
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
