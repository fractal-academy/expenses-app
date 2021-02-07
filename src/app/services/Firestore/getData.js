import { getCollectionRef } from './'

async function getData(collection, document) {
  let result
  if (document) {
    result = await getCollectionRef(collection).doc(document).get()
    result = await result.data()
    return result
  }

  result = await getCollectionRef(collection).get()
  return result.docs.map((doc) => ({ ...result, [doc.id]: doc.data() }))
}

export default getData
