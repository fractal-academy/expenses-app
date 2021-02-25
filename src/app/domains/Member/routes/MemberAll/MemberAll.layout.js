import { useCollectionData } from 'react-firebase-hooks/firestore'
import { MemberList } from 'domains/Member/components/list'
import { MemberCombined } from 'domains/Member/components/combined'
import { Spinner } from 'app/components/Lib'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

/**
 * @info RecruiterListItem (18 Jan 2021) // CREATION DATE
 *
 * @since 12 Feb 2021 ( v.0.0.5 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MemberAll = () => {
  // [ADDITIONAL_HOOKS]
  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS).orderBy('isPending'),
    { idField: 'id' }
  )

  if (!users || loading) {
    return <Spinner />
  }

  // [TEMPLATE]
  return (
    <>
      <MemberList users={users} />
      <MemberCombined />
    </>
  )
}

MemberAll.propTypes = {}

export default MemberAll
