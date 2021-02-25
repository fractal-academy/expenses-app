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
  const [loading, setLoading] = useState(false)

  // [USE_EFFECTS]
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      let data
      try {
        data = await getData(COLLECTIONS.REGULAR_PRODUCTS)
      } catch (e) {
        data = {}
      }
      const dataArray = Object.values(data).map((item) => item)
      setRegularProducts(dataArray)
      setCurrentRegularProduct(dataArray[0])
      setLoading(false)
    }
    fetchCategories()
  }, [])

  // [TEMPLATE]
  return (
    <Select
      loading={loading}
      entity="regular product"
      value={currentRegularProduct}
      data={regularProducts}
      {...rest}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item.name}
        </MenuItem>
      )}
    </Select>
  )
}

RegularProductSingleSelect.propTypes = {}

export default RegularProductSingleSelect
