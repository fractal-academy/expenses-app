import { Table } from 'components/Lib'
import { useSession } from 'app/context/SessionContext'
const products = [
  {
    id: 1,
    asignedUser: 'Ruslan',
    productName: 'Sugar',
    category: 'Kitchen'
  },
  {
    id: 2,
    asignedUser: 'Ruslan',
    productName: 'Extra spicy soup',
    category: 'Kitchen'
  },
  {
    id: 3,
    asignedUser: 'Ruslan',
    productName: 'Sugar',
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

const WishTable = (props) => {
  const user = useSession()
  return (
    <Table type="wishes" products={products} actions={user.role !== 'user'} />
  )
}

export default WishTable
