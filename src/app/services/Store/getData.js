import { getCollectionRef } from '../Store'

async function getData(collection, document) {
  let result
  if (document) {
    result = await getCollectionRef(collection).doc(document).get()
    result = await result.data()
    return result
  }

  await getCollectionRef(collection)
    .get()
    .then((querySnapshot) => {
      result = {}
      querySnapshot.docs.map(
        (doc) => (result = { ...result, [doc.id]: doc.data() })
      )
    })
  return result
}

export default getData
