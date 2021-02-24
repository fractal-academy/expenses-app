import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'
import * as firebaseTypes from '@firebase/firestore-types'
import { COLLECTIONS } from 'src/constants'
import { Notification, User } from 'src/types'
export default functions.pubsub
  .schedule('0 5 * * *')
  .timeZone('Europe/Kiev')
  .onRun(
    async (): Promise<null> => {
      // [COMPUTED_PROPERTIES]
      const currentTimestamp: firebaseTypes.Timestamp = admin.firestore.Timestamp.now()
      const userCollectionRef = admin.firestore().collection(COLLECTIONS.USERS)

      const usersRes = await userCollectionRef.get()
      const users = usersRes.docs.map((user) => ({ ...(<User>user.data()) }))

      for (const user of users) {
        const thisYearUserBirthday = moment(user.birthday).year(
          new Date().getFullYear()
        )
        const dayDiff: number = moment(thisYearUserBirthday).diff(
          moment(currentTimestamp),
          'days'
        )
        if (dayDiff === 1) {
          // Get all admins
          const adminRes = await userCollectionRef
            .where('role', '==', 'admin')
            .get()
          const adminsData = adminRes.docs

          const admins = {
            idsMap: adminsData.map((item) => item.id),
            idsViewed: {}
          }
          adminsData.forEach(
            (item) =>
              (admins.idsViewed = { ...admins.idsViewed, [item.id]: false })
          )

          const notification: Notification = {
            date: currentTimestamp,
            text: `On ${thisYearUserBirthday.format('MM-DD-YYYY')} ${
              user.firstName
            } ${user.surname} birthday.`,
            userId: admins.idsMap,
            viewed: admins.idsViewed
          }

          await admin
            .firestore()
            .collection(COLLECTIONS.NOTIFICATIONS)
            .add(notification)
        }
      }

      return null
    }
  )
