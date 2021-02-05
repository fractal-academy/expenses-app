import { ProductAdvancedForm } from 'app/domains/Product/components/forms/ProductAdvancedForm'

const WishesProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'ProductName',
        'Description',
        'Price',
        'Assign',
        'Category',
        'Measures'
      ]}
    />
  )
}

WishesProductEdit.propTypes = {}

export default WishesProductEdit
