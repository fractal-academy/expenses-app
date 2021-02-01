import firebase from './firebase'

const firestore = firebase.firestore

export const getCollection = async (collectionName) => {
  const snapshot = await firestore.collection(collectionName).get()
  const res = await snapshot.docs.map((doc) => doc.data())
  return res
}
