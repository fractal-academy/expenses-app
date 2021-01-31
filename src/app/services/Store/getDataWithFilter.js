import { getCollectionRef } from '../Store'

async function getDataWithFilter(collection, { field, operator, request }) {
  let result = {}
  await getCollectionRef(collection)
    .where(field, operator, request)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map(
        (doc) => (result = { ...result, [doc.id]: doc.data() })
      )
    })
  return result
}

export default getDataWithFilter
