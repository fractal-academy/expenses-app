import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID
}
let expensesProject = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export default expensesProject
export { firebaseConfig, db }
