import { NotificationList } from 'domains/Notification/components/list'
import { useNotification } from 'app/context/NotificationContext'
import { Spinner } from 'components/Lib'
import { useState, useEffect } from 'react'
import { getData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useSession } from 'app/context/SessionContext'
import md5 from 'md5'

/**
 * @info NotificationAll (18 Jan 2020) // CREATION DATE
 *
 * @since 22 Feb 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationAll = () => {
  // [CUSTOM_HOOKS]
  const notifications = useNotification()
  const session = useSession()

  // [COMPONENT_STATE_HOOKS]
  const [data, setData] = useState(false)

  // [USE_EFFECTS]
  useEffect(() => {
    notifications &&
      getData(COLLECTIONS.USERS, md5(session.email)).then((snapshot) => {
        const res = notifications.map((item) => ({
          id: item.id,
          notificationText: item.text,
          notificationTime: item.date.toDate(),
          userAvatar: snapshot.avatarURL,
          viewed: item.viewed && item.viewed[session.id]
        }))
        setData(res)
      })
  }, [notifications, session.email])

  if (!data) {
    return <Spinner />
  }

  // [TEMPLATE]
  return <NotificationList notifications={data} />
}

NotificationAll.propTypes = {}

export default NotificationAll
