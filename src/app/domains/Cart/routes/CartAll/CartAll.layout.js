import { COLLECTIONS } from 'app/constants'
import { CartTable } from 'domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'
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
