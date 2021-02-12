import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import { firestore, setData } from 'app/services'
import { useHistory, useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const CartEdit = (props) => {
  const history = useHistory()
  const { id } = useParams()
  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.CART).doc(id)
  )
  if (loading) {
    return <Spinner />
  }
  console.log(value.data(), loading)

  const onEditProduct = async (data) => {
    console.log('data', data)
    await setData(COLLECTIONS.CART, id, {
      assign: data.assign.firstName,
      category: data.category,
      dateBuy: data.dateBuy,
      description: data.description,
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
