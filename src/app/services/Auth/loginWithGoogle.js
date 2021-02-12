import firebase, { auth } from '../Firebase'

const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithRedirect(googleProvider)
}

export default loginWithGoogle
