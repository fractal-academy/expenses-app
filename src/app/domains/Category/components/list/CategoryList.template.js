import { CategoryAdvancedView } from 'domains/Category/components/views'
import { getCollectionRef } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Spinner } from 'app/components/Lib'
import { COLLECTIONS } from 'app/constants'

const CategoryList = (props) => {
  // CUSTOM HOOKS
  const [value, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.CATEGORIES),
    { idField: 'id' }
  )

  // TEMPLATE
  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {value.map((item) => (
        <CategoryAdvancedView {...item} key={item.id} />
      ))}
    </>
  )
}

export default CategoryList
