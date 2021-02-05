import { customStore } from '../Store'

function getCollectionRef(collection) {
  return customStore.collection(collection)
}

export default getCollectionRef
