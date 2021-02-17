import { Select } from 'app/components/Lib'
import { MenuItem } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getData } from 'app/services'
import { COLLECTIONS } from 'app/constants'

/**
 * @info MeasureSimpleView (02 Feb 2021) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const RegularProductSingleSelect = (props) => {
  // [INTERFACES]
  const { value, ...rest } = props

  // [COMPONENT_STATE_HOOKS]
  const [currentRegularProduct, setCurrentRegularProduct] = useState(
    value || ''
  )
  const [regularProducts, setRegularProducts] = useState([])

  // [USE_EFFECTS]
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getData(COLLECTIONS.REGULAR_PRODUCTS)
      const dataArray = Object.values(data).map((item) => item.name)
      setRegularProducts(dataArray)
      setCurrentRegularProduct(dataArray[0])
    }
    fetchCategories()
  }, [])

  // [TEMPLATE]
  return (
    <Select value={currentRegularProduct} data={regularProducts} {...rest}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RegularProductSingleSelect.propTypes = {}

export default RegularProductSingleSelect
