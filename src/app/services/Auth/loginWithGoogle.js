import { auth } from './'
import { firebase } from '../'

const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithRedirect(googleProvider)
}

export default loginWithGoogle
