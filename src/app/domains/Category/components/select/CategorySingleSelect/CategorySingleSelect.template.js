import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import { COLLECTIONS } from 'app/constants'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getData } from 'app/services/Firestore'

const CategorySingleSelect = (props) => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      let data
      try {
        data = await getData(COLLECTIONS.CATEGORIES)
      } catch (e) {
        data = {}
      }
      const dataArray = Object.values(data).map((item) => item.nameCategory)
      setCategories(dataArray)
      setCurrentCategory(dataArray[0])
      setLoading(false)
    }
    fetchCategories()
  }, [])

  return (
    <Select
      loading={loading}
      entity="categories"
      data={categories}
      value={currentCategory}
      {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

export default CategorySingleSelect
