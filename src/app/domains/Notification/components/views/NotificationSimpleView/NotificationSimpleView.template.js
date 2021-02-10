import { Notifications } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { firestore } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'app/context/SessionContext/hooks'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import md5 from 'md5'

const NotificationSimpleView = (props) => {
  // STATE
  const [notifNumber, setNotifNumber] = useState(0)

  // CUSTOM HOOKS
  const session = useSession()
  const history = useHistory()
  const [value, loading, error] = useCollection(
    firestore
      .collection('notifications')
      .where('userId', '==', md5(session.email))
  )

  // USE EFFECTS
  useEffect(() => {
    value && setNotifNumber(value.docs.map((item) => item.data).length)
  }, [value])

  // TEMPLATE
  return (
    <>
      {value && (
        <IconButton
          onClick={() => history.push(ROUTES_PATHS.NOTIFICATIONS_ALL)}>
          <Badge badgeContent={notifNumber} max={99} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      )}
    </>
  )
}

export default NotificationSimpleView
