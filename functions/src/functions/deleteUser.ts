import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as md5 from 'md5'
import { COLLECTIONS } from 'src/constants'
const cors = require('cors')({ origin: true })

export default functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // [INTERFACES]
    const email: string = req.body.data.email
    let uid: string | undefined = req.body.data.uid

    // [LOGIC]
    try {
      await admin
        .firestore()
        .collection(COLLECTIONS.USERS)
        .doc(md5(email))
        .delete()
      if (!uid) {
        const res = await admin.auth().getUserByEmail(email)
        uid = res.uid
      }
      await admin.auth().deleteUser(uid)

      return res.status(200).json({ data: 'ok' })
    } catch (error) {
      console.log(error)
      return res.json({ data: error.toString() })
    }
  })
})
