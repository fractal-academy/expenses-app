import { NotificationAdvancedView } from '../../views/NotificationAdvancedView'
import { useState, useEffect } from 'react'
import { firestore, getData } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession } from 'app/context/SessionContext/hooks'
import md5 from 'md5'

//TODO delete mock data
const NotificationList = (props) => {
  // STATE
  const [data, setData] = useState([])

  // CUSTOM HOOKS
  const session = useSession()
  const [value, loading, error] = useCollection(
    firestore
      .collection('notifications')
      .where('userId', '==', md5(session.email))
  )

  // USE EFFECTS
  useEffect(() => {
    getData('users', md5(session.email)).then((result) => {
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
