import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import { COLLECTIONS } from 'app/constants'
import { useEffect, useState } from 'react'
import { getCollectionRef } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CategorySingleSelect = (props) => {
  // STATE
  const [categories, setCategories] = useState([])

  // ADDITIONAL_HOOKS
  const [data, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.CATEGORIES)
  )
  useEffect(() => {
    const dataArray = data
      ? Object.values(data).map((item) => item.nameCategory)
      : {}
    setCategories(dataArray)
  }, [data])

  //TEMPLATE
  return (
    <Select loading={loading} entity="categories" data={categories} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

export default CategorySingleSelect
