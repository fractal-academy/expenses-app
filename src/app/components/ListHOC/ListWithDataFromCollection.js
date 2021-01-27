import { List } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { FIRESTORE } from 'app/constants'

const notifData = [
  {
    id: 12345,
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    notificationText: 'Lorem ipsum dolor amet',
    notificationTime: 3600
  },
  {
    id: 123456,
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    notificationText: 'Lorem ipsum dolor amet',
    notificationTime: 3600
  },
  {
    id: 1234567,
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    notificationText: 'Lorem ipsum dolor amet',
    notificationTime: 3600
  },
  {
    id: 12345678,
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    notificationText: 'Lorem ipsum dolor amet',
    notificationTime: 3600
  }
]

const ListWithDataFromCollection = ({ children, collectionName }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    let tmpdata = []
    FIRESTORE.collection(collectionName)
      .get()
      .then((snapshot) => snapshot.forEach((doc) => tmpdata.push(doc.data())))
      .then(() => {
        setData(tmpdata)
      })
  }, [])

  return <List>{data.map(children)}</List>
}

export default ListWithDataFromCollection
