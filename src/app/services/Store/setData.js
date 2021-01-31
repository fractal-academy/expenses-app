import { getCollectionRef } from '../Store'

function setData(collection, document, data) {
  getCollectionRef(collection)
    .doc(document)
    .set(data)
    .then(function () {
      console.log('Document successfully written!')
    })
    .catch(function (error) {
      console.error('Error writing document: ', error)
    })
}
export default setData
