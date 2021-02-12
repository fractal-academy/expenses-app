/**
 * @param {firebase.storage.Reference} reference - The reference to the given path.
 * @returns {Promise<string|any>}
 */
async function getURL(reference) {
  return reference.getDownloadURL()
}

export default getURL
