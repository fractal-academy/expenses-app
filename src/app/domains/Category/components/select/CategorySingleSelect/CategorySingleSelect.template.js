import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import { COLLECTIONS } from 'app/constants'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getData } from 'app/services/Firestore'

const CategorySingleSelect = (props) => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getData(COLLECTIONS.CATEGORIES)
      const dataArray = Object.values(data).map((item) => item.nameCategory)
      setCategories(dataArray)
      setCurrentCategory(dataArray[0])
    }
    fetchCategories()
  }, [])

  return (
    <Select data={categories} value={currentCategory} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

export default CategorySingleSelect
