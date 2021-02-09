import { getCollectionRef } from './'

/**
 * @param {string} collection - collection name.
 * @param {string} [document] - document id.
 * @returns {Object} - object where key - docId, value - docData.
 * */

async function getData(collection, document) {
  let result = {}
  if (document) {
    try {
      result = await getCollectionRef(collection).doc(document).get()
      if (!result.exists) {
        return Promise.reject(new Error('document not exist.'))
      }
      result = await result.data()
      return result
    } catch (e) {
      console.log('data', e)
    }
  }

  const res = await getCollectionRef(collection).get()
  res.docs.forEach((doc) => {
    result = { ...result, [doc.id]: doc.data() }
  })
  return result
}

export default getData
