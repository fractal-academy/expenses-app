import { COLLECTIONS } from 'app/constants'
import { CartTable } from 'app/domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'

const CartAll = (props) => {
  return (
    <>
      <CartTable />
      <ProductCombinedForm
        title="Create Product"
        specificProductToAdd="Add product"
        collectionName={COLLECTIONS.CART}
      />
    </>
  )
}

CartAll.propTypes = {}

export default CartAll
