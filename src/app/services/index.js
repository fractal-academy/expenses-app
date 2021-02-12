import {
  setData,
  getData,
  firestore,
  getCollectionRef,
  getDataWithFilter,
  getOrderedData
} from './Firestore'
import { upload, getURL, deleteURL } from './Storage'
import { firebase } from './Firebase'
import { auth } from './Auth'

export {
  auth,
  setData,
  getData,
  firestore,
  firebase,
  upload,
  getURL,
  deleteURL,
  getCollectionRef,
  getDataWithFilter,
  getOrderedData
}
