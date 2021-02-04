import { ProductAdvancedForm } from 'app/domains/Product/components/forms/ProductAdvancedForm'

const CartProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Assign',
        'Category',
        'Description',
        'Price',
        'Measures'
      ]}
    />
  )
}

CartProductEdit.propTypes = {}

export default CartProductEdit
