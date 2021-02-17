import { COLLECTIONS } from 'app/constants'
import { CartTable } from 'app/domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'

const CartAll = () => (
  <>
    <CartTable />
    <ProductCombinedForm
      title="Create Product"
      collectionName={COLLECTIONS.CART}
    />
  </>
)

CartAll.propTypes = {}

export default CartAll
