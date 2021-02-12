import { CartTable } from 'domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'
import { COLLECTIONS } from 'app/constants'
const CartAll = (props) => {
  return (
    <>
      <CartTable />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.CART}
      />
    </>
  )
}

CartAll.propTypes = {}
CartAll.defaultProps = {}

export default CartAll
