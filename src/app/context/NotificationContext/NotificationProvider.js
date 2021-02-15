import NotificationContext from './NotificationContext'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'
import { useSession } from '../SessionContext'

const NotificationProvider = (props) => {
  const session = useSession()
  const [data, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.NOTIFICATIONS)
      .where('userId', 'array-contains', md5(session?.email || ''))
      .orderBy('date', 'desc'),
    { idField: 'id' }
  )
  return <NotificationContext.Provider value={!loading && data} {...props} />
}

export default NotificationProvider
