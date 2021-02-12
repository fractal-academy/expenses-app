import { CategoryAdvancedView } from 'domains/Category/components/views'
import { useState, useEffect } from 'react'
import { firestore } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

const CategoryList = (props) => {
  // STATE
  const [data, setData] = useState([])

  // CUSTOM HOOKS
  const [value, loading, error] = useCollection(
    firestore.collection('categories')
  )

  // USE EFFECTS
  useEffect(() => {
    const recievedData =
      value &&
      value.docs.map((item) => {
        return {
          id: item.id,
          ...item.data()
        }
      })
    setData(recievedData)
    return () => {}
  }, [value])

  // TEMPLATE
  return (
    <>
      {data &&
        data.map((item) => <CategoryAdvancedView {...item} key={item.id} />)}
    </>
  )
}

export default CategoryList
