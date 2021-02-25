import * as firebaseTypes from '@firebase/firestore-types'

export default interface Notification {
  date: firebaseTypes.Timestamp
  text: string
  userId: string[]
  viewed: { [key: string]: boolean }
}
