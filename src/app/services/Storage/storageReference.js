import { customStorage } from '../Storage'

function storageReference(name) {
  return customStorage.ref().child(name)
}

export default storageReference
