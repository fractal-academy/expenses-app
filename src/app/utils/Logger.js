import { COLLECTIONS } from 'app/constants'
import { addData, getTimestamp } from 'app/services/Firestore'

const Logger = (action, description, user) => {
  const dateTime = getTimestamp().now()

  addData(COLLECTIONS.LOGS, {
    action,
    dateTime,
    userMail: user.email,
    userAvatar: user.avatarURL,
    description
  })
}

export default Logger
