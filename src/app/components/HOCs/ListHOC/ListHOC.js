import { List } from '@material-ui/core'
import { useEffect, useState } from 'react'
// import { FIRESTORE } from 'app/constants'

//TODO delete mock data
const ListHOC = (props) => {
  const { children, collectionName, mock } = props
  const [data, setData] = useState(mock)
  useEffect(() => setData(mock), [mock])
  //TODO refactor to service
  // useEffect(() => {
  //   FIRESTORE.collection(collectionName)
  //     .get()
  //     .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  //     .then((dataFromCollection) => {
  //       setData(dataFromCollection)
  //     })
  // }, [])

  return <>{data && <List>{data.map(children)}</List>}</>
}

export default ListHOC
