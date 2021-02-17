import { RegularProductsTable } from 'domains/RegularProduct/components/table'
import { Container } from '@qonsoll/react-design'
import { RegularProductCombined } from 'domains/RegularProduct/components/combined'

const RegularProductAll = () => (
  <Container p={2}>
    <RegularProductsTable />
    <RegularProductCombined title="Add new regular product" />
  </Container>
)

RegularProductAll.propTypes = {}

export default RegularProductAll
