import { firestore } from './'

function getCollectionRef(collection) {
  return firestore.collection(collection)
}

export default getCollectionRef
