import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { MenuItem } from '@material-ui/core'
import { Select } from 'components/Lib'
import { getData, getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const MemberSingleSelect = (props) => {
  const [currentUser, setCurrentUser] = useState('')
  const [members, setMembers] = useState([])

  //TODO getData need filter all !pending users
  useEffect(() => {
    getCollectionRef(COLLECTIONS.USERS)
      .where('isPending', '==', false)
      .get()
      .then((res) => {
        let tmp = {}
        res.forEach((item) => {
          tmp = { ...tmp, [item.id]: { id: item.id, ...item.data() } }
        })

        tmp = Object.values(tmp)
        setMembers(tmp)
        setCurrentUser(tmp[0])
      })
  }, [])

  return (
    <Select data={members} value={currentUser} {...props}>
      {(item) => (
        <MenuItem key={item.email} value={item}>
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
