import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'
import { useHistory, useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore, setData } from 'app/services'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { Spinner } from 'app/components/Lib'

const CartEdit = (props) => {
  // CUSTOM HOOKS
  const history = useHistory()
  const { id } = useParams()
  const [value, loading, error] = useCollection(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )
  if (loading) {
    return <Spinner />
  }
  console.log(value)
  const onEditProduct = (data) => {
    console.log(data)
    setData(COLLECTIONS.CART, id, data)
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
        'measures',
        'dateBuy'
      ]}
      formData={{ ...value.data(), id }}
      onSubmit={onEditProduct}
      buttonProps={{ onClickSubmit: onSubmitButton, onClickCancel: onCancel }}
    />
  )
}

CartEdit.propTypes = {}

export default CartEdit
