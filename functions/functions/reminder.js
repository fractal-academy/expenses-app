const functions = require('firebase-functions')
const admin = require('firebase-admin')

exports.reminder = functions.pubsub
  .schedule('1 0 * * *')
  .timeZone('Europe/Kiev')
  .onRun(async (context) => {
    const products = await admin.firestore().collection('regularProducts').get()
    const remindedProducts = products.docs
      .map((item) => {
        return {
          name: item.data().name,
          date: item.data().remind,
          userId: [item.data().assign] | []
        }
      })
      .filter((item) => item.date.toDate().getDate() === new Date().getDate())
    const adminsInfo = await admin
      .firestore()
      .collection('users')
      .where('role', '==', 'admin')
      .get()
    const adminsIds = adminsInfo.docs.map((item) => item.id)

    remindedProducts &&
      remindedProducts.forEach((item) => {
        admin
          .firestore()
          .collection('notifications')
          .add({
            date: item.date,
            text: `You should buy ${item.name} today!`,
            userId: item.userId | adminsIds
          })
      })
  })
