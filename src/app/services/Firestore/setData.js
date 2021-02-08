import { getCollectionRef } from './'

/**
 * @param {string} collection - collection name.
 * @param {string} document - document id.
 * @param {Object} data - A map of the fields and values for the document.
 * */

function setData(collection, document, data) {
  return getCollectionRef(collection).doc(document).set(data)
}
export default setData
