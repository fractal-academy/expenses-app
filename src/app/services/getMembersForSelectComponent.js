import { db } from 'app/constants'

const getMembersForSelectComponent = async () => {
  const snapshot = await db.collection('users').get()
  const res = await snapshot.docs.map((doc) => doc.data())
  return res
}

export default getMembersForSelectComponent
