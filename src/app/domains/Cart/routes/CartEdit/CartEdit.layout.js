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

  const onEditCategory = (data) => {
    setData(COLLECTIONS.CART, id, data)
  }
  const onSubmit = () => history.push(ROUTES_PATHS.CART_ALL)
  const onCancel = () => history.push(`${ROUTES_PATHS.CART_ALL}/${id}`)
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
        'date'
      ]}
      formData={{ ...value.data(), id }}
      onSubmit={onEditCategory}
      buttonProps={{ onClickSubmit: onSubmit, onClickCancel: onCancel }}
    />
  )
}

CartEdit.propTypes = {}

export default CartEdit
