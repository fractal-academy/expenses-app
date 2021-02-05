import { ProductAdvancedForm } from 'app/domains/Product/components/forms/ProductAdvancedForm'

const RegularProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Description',
        'Price',
        'Assign',
        'Category',
        'Measures',
        'Remind'
      ]}
    />
  )
}

RegularProductEdit.propTypes = {}

export default RegularProductEdit
