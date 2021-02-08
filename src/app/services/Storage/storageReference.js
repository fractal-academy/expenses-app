import { storage } from '../Storage'

function storageReference(name) {
  return storage.ref().child(name)
}

export default storageReference
