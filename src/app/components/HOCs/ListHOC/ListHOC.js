import { List } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { FIRESTORE } from 'app/constants'

const ListHOC = ({ children, collectionName }) => {
  const [data, setData] = useState([])
  //todo
  // useEffect(() => {
  //   FIRESTORE.collection(collectionName)
  //     .get()
  //     .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  //     .then((dataFromCollection) => {
  //       setData(dataFromCollection)
  //     })
  // }, [])

  return <List>{data.map(children)}</List>
}

export default ListHOC
