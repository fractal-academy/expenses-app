import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react'
import _ from 'lodash'

/**
 * @info MemberSingleSelect (18 Jan 2021) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.1.0 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MemberSingleSelect = (props) => {
  // [INTERFACES]
  const { value, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const [members, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS)
      .where('isPending', '==', false)
      .where('role', '==', 'admin'),
    { idField: 'id' }
  )

  // [COMPONENT_STATE_HOOKS]
  const [user, setUser] = useState()

  // [HELPER_FUNCTIONS]
  const getUserDisplayName = (member) =>
    member.firstName && member.surname
      ? `${member.firstName} ${member.surname}`
      : member.email

  // [USE_EFFECTS]
  useEffect(() => {
    if (members && value) {
      const uniq = _.uniqBy([value, ...members], 'email')
      setUser(uniq)
    }
  }, [members])

  // [TEMPLATE]
  return (
    <Select
      entity="members"
      loading={loading}
      data={user || members}
      value={value}
      {...rest}>
      {(item, index) => (
        <MenuItem key={item.id || index} value={item}>
          {getUserDisplayName(item)}
        </MenuItem>
      )}
    </Select>
  )
}
MemberSingleSelect.propTypes = {
  value: PropTypes.any
}
export default MemberSingleSelect
