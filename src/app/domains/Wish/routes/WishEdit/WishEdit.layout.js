import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'app/components/Lib'
import { firestore, setData } from 'app/services'
import { useHistory, useParams } from 'react-router-dom'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ProductAdvancedForm } from 'domains/Product/components/forms/ProductAdvancedForm'

const WishEdit = (props) => {
  const { buttonProps } = props
  const history = useHistory()
  const { id } = useParams()
  const [value, loading] = useCollection(
    firestore.collection(COLLECTIONS.WISHES).doc(id)
  )

  if (loading) {
    return <Spinner />
  }
  const onEditProduct = (data) => {
    setData(COLLECTIONS.WISHES, id, {
      assign: data.assign.firstName,
      category: data.category,
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
        'measures'
      ]}
      formData={{ ...value.data(), id }}
      onSubmit={onEditProduct}
      buttonProps={{
        onClickSubmit: onSubmitButton,
        onClickCancel: onCancel,
        ...buttonProps
      }}
    />
  )
}

WishEdit.propTypes = {}

export default WishEdit
