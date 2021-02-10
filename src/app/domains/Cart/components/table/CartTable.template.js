import { Table } from 'components/Lib'

const products = [
  {
    id: 1,
    asignedUser: 'Ruslan',
    productName: 'Cake',
    category: 'Kitchen'
  },
  {
    id: 2,
    asignedUser: 'Ruslan',
    productName: 'Sugar',
    category: 'Kitchen'
  },
  {
    id: 3,
    asignedUser: 'Ruslan',
    productName: 'Extra spicy soup',
    category: 'Kitchen'
  },
  {
    id: 4,
    asignedUser: 'Ruslan',
    productName: 'Extra spicy soup',
    category: 'Kitchen'
  },
  {
    id: 5,
    asignedUser: 'Ruslan',
    productName: 'Extra spicy soup',
    category: 'Kitchen'
  }
]
const CartTable = (props) => {
  return <Table type="cart" products={products} />
}

CartTable.propTypes = {}

export default CartTable
