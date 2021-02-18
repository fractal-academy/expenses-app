import { COLLECTIONS } from 'app/constants'
import { addData, getTimestamp } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'

const useLogger = (action, description) => {
  const user = useSession()
  return (callback) => (data, selectedItems) => {
    callback(data, selectedItems)
    const dateTime = getTimestamp().now()
    addData(COLLECTIONS.LOGS, {
      action,
      dateTime,
      userMail: user.email,
      userAvatar: user.avatarURL,
      description
    })
  }
}

export default useLogger
