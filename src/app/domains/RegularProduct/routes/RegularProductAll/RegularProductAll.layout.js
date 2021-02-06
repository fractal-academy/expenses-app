import { RegularProductsTable } from 'domains/RegularProduct/components/table'
import { Container } from '@qonsoll/react-design'
import { RegularProductCombined } from 'domains/RegularProduct/components/combined'

const products = [
  {
    productName: 'sugar',
    categoryName: 'kitchen',
    asignee: 'Zhenya'
  },
  {
    productName: 'water',
    categoryName: 'kitchen',
    asignee: 'Zhenya'
  },
  {
    productName: 'table',
    categoryName: 'kitchen',
    asignee: 'Lyosha'
  }
]

const RegularProductAll = (props) => {
  return (
    <Container p={2}>
      <RegularProductsTable products={products} />
      <RegularProductCombined title="Add new regular product" />
    </Container>
  )
}

RegularProductAll.propTypes = {}
RegularProductAll.defaultProps = {}

export default RegularProductAll
