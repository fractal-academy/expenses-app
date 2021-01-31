import { customStorage } from '../Storage'

function storageReference(path) {
  return customStorage.ref()
}

export default storageReference
