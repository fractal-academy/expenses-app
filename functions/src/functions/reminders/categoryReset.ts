import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { COLLECTIONS } from 'src/constants'
import { Category } from 'src/types'

export default functions.pubsub
  .schedule('0 5 1 * *')
  .timeZone('Europe/Kiev')
  .onRun(
    async (): Promise<null> => {
      const categoriesRef = admin.firestore().collection(COLLECTIONS.CATEGORIES)

      const categoriesRes = await categoriesRef.get()

      const categories = categoriesRes.docs.map((category) => ({
        ...(<Category>category.data()),
        id: category.id
      }))

      // [LOGIC]
      for (const category of categories) {
        const { id } = category
        await categoriesRef.doc(id).update(<Category>{ spent: 0 })
      }

      return null
    }
  )
