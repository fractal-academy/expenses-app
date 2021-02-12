import PropTypes from 'prop-types'
import { ProductAdvancedView } from 'domains/Product/components/views'
import { useEffect, useState } from 'react'
import { getData } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

const RegularProductShow = (props) => {
  const productId = window.location.hash.substring(1)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getData(
        COLLECTIONS.REGULAR_PRODUCTS,
        productId
      )
      setProduct({
        ...fetchedProduct,
        firstName: fetchedProduct.assigneeName.firstName
      })
    }
    fetchProduct()
  }, [productId])

  return (
    <>
      {product && (
        <ProductAdvancedView
          type="product"
          {...props}
          id={productId}
          assignedUser={product.firstName}
          name={product.productName}
          nameCategory={product.nameCategory}
        />
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
