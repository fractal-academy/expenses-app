import { NotificationAdvancedView } from 'domains/Notification/components/views'
import { useState, useEffect } from 'react'
import { getCollectionRef, getData } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'app/context/SessionContext/hooks'
import { COLLECTIONS } from 'app/constants'
import md5 from 'md5'

const NotificationList = (props) => {
  // STATE
  const [data, setData] = useState([])

  // CUSTOM HOOKS
  const session = useSession()
  const [value, loading, error] = useCollection(
    getCollectionRef(COLLECTIONS.NOTIFICATIONS).where(
      'userId',
      '==',
      md5(session.email)
    )
  )

  // USE EFFECTS
  useEffect(() => {
    getData(COLLECTIONS.USERS, md5(session.email)).then((result) => {
      const notifications =
        value &&
        value.docs.map((item) => {
          return {
            id: item.id,
            notificationText: item.data().text,
            notificationTime: item.data().date.seconds,
            notificationAvatar: result.avatarURL
          }
        })
      setData(notifications)
    })
    return () => {}
  }, [value, session.email])

  // TEMPLATE
  return (
    <>
      {data &&
        data.map((item) => (
          <NotificationAdvancedView
            key={item.id}
            notificationAvatar={item.notificationAvatar}
            notificationText={item.notificationText}
            notificationTime={item.notificationTime}
            verticalAlignment="center"
            horizontalAlignment="around"
          />
        ))}
    </>
  )
}

export default NotificationList
