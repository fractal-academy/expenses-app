import { useCollectionData } from 'react-firebase-hooks/firestore'
import { COLLECTIONS } from 'app/constants'
import { getCollectionRef } from 'app/services'
import { Spinner } from 'app/components/Lib'
import { LogList } from 'domains/Log/components/list'

const LogAll = () => {
  // [CUSTOM_HOOKS]
  const [data, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LOGS).orderBy('dateTime', 'desc')
  )

  // TEMPLATE
  if (loading) {
    return <Spinner />
  }
  return <LogList logs={data} />
}

export default LogAll
