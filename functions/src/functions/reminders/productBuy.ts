import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'
import * as firebaseTypes from '@firebase/firestore-types'
import { COLLECTIONS } from 'src/constants'
import { Notification, RegularProduct } from 'src/types'

export default functions.pubsub
  .schedule('0 5 * * *')
  .timeZone('Europe/Kiev')
  .onRun(
    async (): Promise<null> => {
      // [TYPES]
      type remindedProduct = {
        name: string
        date: firebaseTypes.Timestamp
        userId: string
      }
      type adminsMap = {
        idsMap: string[]
        idsViewed: {
          [key: string]: boolean
        }
      }

      // [COMPUTED_PROPERTIES]
      const currentTimestamp: firebaseTypes.Timestamp = admin.firestore.Timestamp.now()

      // [HELPER_FUNCTIONS]
      const collectionRef = (name: string) => admin.firestore().collection(name)

      // Get all products
      const productsRes = await collectionRef(COLLECTIONS.REGULAR_PRODUCTS)
        .where('remind', '!=', 'null')
        .get()
      const products = productsRes.docs

      // Select only product what should be reminded
      const remindedProducts: remindedProduct[] = await products
        .map(
          (item): remindedProduct => {
            const product: RegularProduct = <RegularProduct>item.data()
            return {
              name: product.name,
              date: product.remind,
              userId: product.assign
            }
          }
        )
        .filter(
          (item) => moment(item.date).date() === moment(currentTimestamp).date()
        )

      // Get all admins
      const adminRes = await collectionRef(COLLECTIONS.USERS)
        .where('role', '==', 'admin')
        .get()
      const adminsData = adminRes.docs

      // Prepare admin data for notification
      const admins: adminsMap = {
        idsMap: adminsData.map((item) => item.id),
        idsViewed: {}
      }
      adminsData.forEach(
        (item) => (admins.idsViewed = { ...admins.idsViewed, [item.id]: false })
      )

      // Add notification
      if (remindedProducts) {
        remindedProducts.forEach((item) => {
          const notification: Notification = {
            date: currentTimestamp,
            text: `You should buy ${item.name} today!`,
            userId: item.userId ? [item.userId] : admins.idsMap,
            viewed: item.userId ? { [item.userId]: false } : admins.idsViewed
          }

          collectionRef(COLLECTIONS.NOTIFICATIONS).add(notification)
        })
      }

      return null
    }
  )
