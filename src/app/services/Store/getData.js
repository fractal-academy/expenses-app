import customStore from './customStore'

async function getData(collection, document) {
  let result
  if (document) {
    result = await customStore.collection(collection).doc(document).get()
    result = await result.data()
    return result
  }

  await customStore
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      result = []
      querySnapshot.docs.map((doc) => result.push(doc.data()))
    })
  return result
}

export default getData
