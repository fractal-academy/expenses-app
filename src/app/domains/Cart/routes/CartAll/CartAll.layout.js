import { Container } from '@qonsoll/react-design'
import { CartTable } from 'domains/Cart/components/table'
import { CartCombined } from 'domains/Cart/components/combined'

const CartAll = (props) => {
  return (
    <Container>
      <CartTable />
      <CartCombined title="Add new item to cart" />
    </Container>
  )
}

CartAll.propTypes = {}
CartAll.defaultProps = {}

export default CartAll
