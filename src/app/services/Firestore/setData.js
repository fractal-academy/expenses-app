import { getCollectionRef } from './'

function setData(collection, document, data) {
  return getCollectionRef(collection).doc(document).set(data)
}
export default setData
