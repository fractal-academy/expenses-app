import { useState, useEffect } from 'react'
import { MemberList } from 'domains/Member/components/list'
import { MemberCombined } from 'domains/Member/components/combined'
import { Spinner } from 'app/components/Lib'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const MemberAll = (props) => {
  const [data, loading] = useCollection(
    getCollectionRef(COLLECTIONS.USERS).orderBy('isPending')
  )
  const [users, setUsers] = useState(false)
  useEffect(
    () =>
      !loading &&
      setUsers(
        data.docs.map((snapshot) => ({ ...snapshot.data(), id: snapshot.id }))
      ),
    [data, loading]
  )
  if (!users || loading) {
    return <Spinner />
  }
  return (
    <>
      <MemberList users={users} />
      <MemberCombined />
    </>
  )
}

MemberAll.propTypes = {}
MemberAll.defaultProps = {}

export default MemberAll
