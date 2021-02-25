import { CategoryAdvancedView } from 'domains/Category/components/views'
import { useState, useEffect } from 'react'
import { getCollectionRef } from 'app/services/Firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'

const CategoryList = (props) => {
  // STATE
  const [data, setData] = useState([])

  // CUSTOM HOOKS
  const [value, loading] = useCollection(
    getCollectionRef(COLLECTIONS.CATEGORIES)
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
  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {data &&
        data.map((item) => <CategoryAdvancedView {...item} key={item.id} />)}
    </>
  )
}

export default CategoryList
