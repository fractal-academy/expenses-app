import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const WishEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Description',
        'Price',
        'Currency',
        'Assign',
        'Category',
        'Measures'
      ]}
    />
  )
}

WishEdit.propTypes = {}

export default WishEdit
