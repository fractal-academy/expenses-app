import firebase from 'firebase/app'
import { FIREBASE_CONFIG } from 'app/constants'

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
} else {
  firebase.app()
}

export default firebase
