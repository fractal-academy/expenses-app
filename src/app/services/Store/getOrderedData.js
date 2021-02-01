import { getCollectionRef } from '../Store'

async function getOrderedData(collection, field, bool) {
  let result = []
  await getCollectionRef(collection)
    .orderBy(field, bool && 'desc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map((doc) =>
        result.push({ ...doc.data(), id: doc.id })
      )
    })
  return result
}

export default getOrderedData
