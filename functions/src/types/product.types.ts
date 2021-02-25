import * as firestoreTypes from '@firebase/firestore-types'

export default interface RegularProduct {
  remind?: firestoreTypes.Timestamp
  name: string
  price?: string
  id: string
  category: string
  quantity?: string
  assign?: string
}
