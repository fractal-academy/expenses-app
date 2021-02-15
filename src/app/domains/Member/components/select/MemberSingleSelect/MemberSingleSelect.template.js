import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { MenuItem } from '@material-ui/core'
import { Select } from 'components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useCollection } from 'react-firebase-hooks/firestore'

const MemberSingleSelect = (props) => {
  const [value] = useCollection(
    getCollectionRef(COLLECTIONS.USERS).where('isPending', '!=', true)
  )
  const members = useMemo(
    () =>
      value &&
      value.docs.map((member) => {
        return { ...member.data(), id: member.id }
      }),
    [value]
  )
  return (
    <Select data={members && members} value={members && members[0]} {...props}>
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
