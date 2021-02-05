import { ProductAdvancedForm } from 'app/domains/Product/components/forms/ProductAdvancedForm'

const CartProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Description',
        'Price',
        'Assign',
        'Category',
        'Measures',
        'Date'
      ]}
    />
  )
}

CartProductEdit.propTypes = {}

export default CartProductEdit
