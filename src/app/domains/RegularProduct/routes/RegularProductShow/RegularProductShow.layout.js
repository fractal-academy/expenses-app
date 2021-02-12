import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'
import { useEffect, useState } from 'react'
import { getData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useParams } from 'react-router-dom'

const RegularProductShow = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    console.log(id)
    const fetchProduct = async () => {
      const fetchedProduct = await getData(COLLECTIONS.REGULAR_PRODUCTS, id)
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [id])

  return (
    <>
      {product && (
        <ProductAdvancedView type="product" {...props} id={id} data={product} />
      )}
    </>
  )
}

RegularProductShow.propTypes = {
  price: PropTypes.number,
  number: PropTypes.number,
  measure: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  reminderDate: PropTypes.number,
  assignedUser: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default RegularProductShow
