import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react'
import _ from 'lodash'

const MemberSingleSelect = (props) => {
  const { value, ...rest } = props
  const [members] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS)
      .where('isPending', '==', false)
      .where('role', '==', 'admin'),
    { idField: 'id' }
  )
  const [user, setUser] = useState()
  useEffect(() => {
    if (members && props.value) {
      const uniq = _.uniqBy([props.value, ...members], 'email')
      setUser(uniq)
    }
  }, [members])

  return (
    <Select data={user || members} value={value} {...rest}>
      {(item) => (
        <MenuItem key={item} value={item}>
          {item.firstName && item.surname
            ? `${item.firstName} ${item.surname}`
            : item.email}
        </MenuItem>
      )}
    </Select>
  )
}
MemberSingleSelect.propTypes = {
  onChange: PropTypes.func.isRequired
}
export default MemberSingleSelect
