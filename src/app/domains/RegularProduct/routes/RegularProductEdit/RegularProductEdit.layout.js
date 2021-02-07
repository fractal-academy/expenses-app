import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const RegularProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Description',
        'Price',
        'Currency',
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
