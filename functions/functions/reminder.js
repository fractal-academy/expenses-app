const functions = require('firebase-functions')
const admin = require('firebase-admin')
const moment = require('moment')

exports.reminder = functions.pubsub
  .schedule('0 5 * * *')
  .timeZone('Europe/Kiev')
  .onRun(async (context) => {
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
    const adminsIds = adminsInfo.docs.map((item) => item.id)

    filteredProducts &&
      filteredProducts.forEach((item) => {
        admin
          .firestore()
          .collection('notifications')
          .add({
            date: admin.firestore.Timestamp.now(),
            text: `You should buy ${item.name} today!`,
            userId: item.userId ? [item.userId] : adminsIds
          })
      })
    return null
  })
