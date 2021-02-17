import { Select } from 'app/components/Lib'
import { MenuItem } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getData } from 'app/services'
import { COLLECTIONS } from 'app/constants'

const RegularProductSingleSelect = (props) => {
  const [currentRegularProduct, setCurrentRegularProduct] = useState('')
  const [regularProducts, setRegularProducts] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getData(COLLECTIONS.REGULAR_PRODUCTS)
      const dataArray = Object.values(data).map((item) => item.name)
      setRegularProducts(dataArray)
      setCurrentRegularProduct(dataArray[0])
    }
    fetchCategories()
  }, [])
  return (
    <Select value={currentRegularProduct} data={regularProducts} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RegularProductSingleSelect.propTypes = {}
RegularProductSingleSelect.defaultProps = {}

export default RegularProductSingleSelect
