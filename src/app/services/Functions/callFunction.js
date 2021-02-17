import firebase from 'app/services/Firebase'

/**
 * @param {string} name The name of the https callable function.
 * @param {firebase.functions.HttpsCallableOptions} [options] The options for this HttpsCallable instance.
 * @returns {HttpsCallable}
 */

const callFunction = (name, options) => {
  return firebase.functions().httpsCallable(name, { timeout: 0, ...options })
}

export default callFunction
