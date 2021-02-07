import { firebase } from '../Firebase'

const getTimestamp = () => firebase.firestore.Timestamp

export default getTimestamp
