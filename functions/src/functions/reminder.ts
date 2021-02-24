import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'

export default functions.pubsub
  .schedule('0 5 * * *')
  .timeZone('Europe/Kiev')
  .onRun(async () => {
    const products = await admin
      .firestore()
      .collection('regularProducts')
      .where('remind', '!=', 'null')
      .get()
    const remindedProducts = await products.docs.map((item) => {
      return {
        name: item.data().name,
        date: item.data().remind,
        userId: item.data().assign
      }
    })

    const filteredProducts = remindedProducts.filter(
      (item) =>
        moment(item.date).date() ===
        moment(admin.firestore.Timestamp.now()).date()
    )

    const adminsInfo = await admin
      .firestore()
      .collection('users')
      .where('role', '==', 'admin')
      .get()
    const admins: any = {}
    admins.idsMap = adminsInfo.docs.map((item) => item.id)
    admins.idsViewed = {}
    adminsInfo.docs.forEach(
      (item) => (admins.idsView = { ...admins.idsView, [item.id]: false })
    )

    filteredProducts &&
      filteredProducts.forEach((item) => {
        admin
          .firestore()
          .collection('notifications')
          .add({
            date: admin.firestore.Timestamp.now(),
            text: `You should buy ${item.name} today!`,
            userId: item.userId ? [item.userId] : admins.idsMap,
            viewed: item.userId ? { [item.userId]: false } : admins.idsViewed
          })
      })
    return null
  })
