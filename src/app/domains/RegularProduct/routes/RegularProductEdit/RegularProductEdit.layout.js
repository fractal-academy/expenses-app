import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const RegularProductEdit = (props) => {
  return (
    <ProductAdvancedForm
      show={[
        'name',
        'description',
        'price',
        'currency',
        'assign',
        'category',
        'measures',
        'remind'
      ]}
    />
  )
}

RegularProductEdit.propTypes = {}

export default RegularProductEdit
