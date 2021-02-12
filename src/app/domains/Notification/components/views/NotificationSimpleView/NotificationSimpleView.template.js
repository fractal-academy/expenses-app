import { Notifications } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import { getCollectionRef } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'app/context/SessionContext/hooks'
import { useHistory } from 'react-router-dom'
import { useMemo } from 'react'
import { ROUTES_PATHS, COLLECTIONS } from 'app/constants'
import md5 from 'md5'

const NotificationSimpleView = (props) => {
  // CUSTOM HOOKS
  const session = useSession()
  const history = useHistory()
  const [data, loading] = useCollection(
    getCollectionRef(COLLECTIONS.NOTIFICATIONS).where(
      'userId',
      '==',
      md5(session.email)
    )
  )
  const notification = useMemo(
    () => !loading && data.docs.map((item) => item.data).length,
    [data, loading]
  )
  // TEMPLATE
  return (
    <IconButton onClick={() => history.push(ROUTES_PATHS.NOTIFICATIONS_ALL)}>
      <Badge badgeContent={notification} max={99} color="secondary">
        <Notifications />
      </Badge>
    </IconButton>
  )
}

export default NotificationSimpleView
