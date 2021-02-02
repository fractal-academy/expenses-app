import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { FIREBASE_CONFIG } from 'app/constants'

firebase.initializeApp(FIREBASE_CONFIG)

export default firebase
