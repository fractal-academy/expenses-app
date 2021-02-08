import { getCollectionRef } from './'

async function getData(collection, document) {
  let result = {}
  if (document) {
    result = await getCollectionRef(collection).doc(document).get()
    result = await result.data()
    return result
  }

  const res = await getCollectionRef(collection).get()
  res.docs.forEach((doc) => {
    result = { ...result, [doc.id]: doc.data() }
  })
  return result
}

export default getData
