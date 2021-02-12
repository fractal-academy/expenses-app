import { storage } from './'

/**
 * @param {string} path - File path.
 * @returns {firebase.storage.Reference} - The reference to the given path.
 */
function storageReference(path) {
  return storage.ref().child(path)
}

export default storageReference
