const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })
const md5 = require('md5')

exports.deleteUser = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    let { email, uid } = req.body.data

    try {
      await admin.firestore().collection('users').doc(md5(email)).delete()
      if (!uid) {
        const res = await admin.auth().getUserByEmail(email)
        uid = res.uid
      }
      uid && (await admin.auth().deleteUser(uid))
      return res.status(200).json({ data: 'ok' })
    } catch (error) {
      console.log(error)
      return res.json({ data: error.toString() })
    }
  })
})
