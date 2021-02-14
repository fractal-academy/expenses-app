import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { useHistory, useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore, setData } from 'app/services'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'

const RegularProductEdit = (props) => {
  const history = useHistory()
  const { id } = useParams()
  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.REGULAR_PRODUCTS).doc(id)
  )
  if (loading) {
    return <Spinner />
  }

  const onEditProduct = async (data) => {
    await setData(COLLECTIONS.REGULAR_PRODUCTS, id, {
      assign: data.assign.firstName,
      category: data.category,
      description: data.description,
      remind: data.remind,
      id: id,
      price: data.price,
      measures: data.measures,
      name: data.name,
      quantity: data.quantity
    })
  }
  const onSubmitButton = () => history.goBack()
  const onCancel = () => history.goBack()
  return (
    <ProductAdvancedForm
      show={[
        'name',
        'description',
        'price',
        'currency',
        'assign',
        'category',
        'quantity',
        'measures',
        'remind'
      ]}
      formData={{ ...value.data(), id }}
      onSubmit={onEditProduct}
      buttonProps={{ onClickSubmit: onSubmitButton, onClickCancel: onCancel }}
    />
  )
}

RegularProductEdit.propTypes = {}

export default RegularProductEdit
