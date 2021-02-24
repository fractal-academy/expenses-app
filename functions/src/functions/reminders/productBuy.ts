import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'
import * as firebaseTypes from '@firebase/firestore-types'
import { COLLECTIONS } from 'src/constants'
import { Notification } from 'src/types'

export default functions.pubsub
  .schedule('0 5 * * *')
  .timeZone('Europe/Kiev')
  .onRun(
    async (): Promise<null> => {
      const currentTimestamp = admin.firestore.Timestamp.now()
      const products = await admin
        .firestore()
        .collection(COLLECTIONS.REGULAR_PRODUCTS)
        .where('remind', '!=', 'null')
        .get()

      type remindProduct = {
        name: string
        date: firebaseTypes.Timestamp
        userId: string
      }
      const remindedProducts: remindProduct[] = await products.docs
        .map((item) => ({
          name: item.data().name,
          date: item.data().remind,
          userId: item.data().assign
        }))
        .filter(
          (item) => moment(item.date).date() === moment(currentTimestamp).date()
        )

      const adminsInfo = await admin
        .firestore()
        .collection(COLLECTIONS.USERS)
        .where('role', '==', 'admin')
        .get()

      type adminsMap = {
        idsMap: string[]
        idsViewed: {
          [key: string]: boolean
        }
      }

      const admins: adminsMap = {
        idsMap: adminsInfo.docs.map((item) => item.id),
        idsViewed: {}
      }
      adminsInfo.docs.forEach(
        (item) => (admins.idsViewed = { ...admins.idsViewed, [item.id]: false })
      )

      if (remindedProducts) {
        remindedProducts.forEach((item) => {
          const notification: Notification = {
            date: currentTimestamp,
            text: `You should buy ${item.name} today!`,
            userId: item.userId ? [item.userId] : admins.idsMap,
            viewed: item.userId ? { [item.userId]: false } : admins.idsViewed
          }

          admin
            .firestore()
            .collection(COLLECTIONS.NOTIFICATIONS)
            .add(notification)
        })
      }

      return null
    }
  )
