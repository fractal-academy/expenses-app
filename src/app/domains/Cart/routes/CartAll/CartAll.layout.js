import { CartTable } from 'domains/Cart/components/table'
import { CartCombined } from 'domains/Cart/components/combined'

const CartAll = (props) => {
  return (
    <>
      <CartTable />
      <CartCombined title="Add new item to cart" />
    </>
  )
}

CartAll.propTypes = {}
CartAll.defaultProps = {}

export default CartAll
