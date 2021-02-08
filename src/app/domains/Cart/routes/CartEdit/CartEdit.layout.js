import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const CartEdit = (props) => {
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
        'Date'
      ]}
    />
  )
}

CartEdit.propTypes = {}

export default CartEdit
