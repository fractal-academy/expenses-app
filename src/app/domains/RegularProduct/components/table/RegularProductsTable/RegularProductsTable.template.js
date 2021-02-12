import { Table } from 'components/Lib'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'

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

const RegularProductsTable = (props) => {
  const [products, setProducts] = useState([])

  // CUSTOM HOOKS
  const [value, loading, error] = useCollection(
    getCollectionRef(COLLECTIONS.REGULAR_PRODUCTS)
  )

  // USE EFFECTS
  useEffect(() => {
    const recievedData = value?.docs.map((item) => {
      return { id: item.id, ...item.data() }
    })
    setProducts(recievedData)
    return () => {}
  }, [value])

  return <>{products && <Table type="regular" products={products} />}</>
}

export default RegularProductsTable
