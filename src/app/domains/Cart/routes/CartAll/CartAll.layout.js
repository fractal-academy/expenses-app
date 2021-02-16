import { COLLECTIONS } from 'app/constants'
import { CartTable } from 'domains/Cart/components/table'
import { ProductCombinedForm } from 'app/domains/Product/components/combined/ProductCombinedForm'
import { firebase } from 'app/services'
const CartAll = (props) => {
  const tmp = async () => {
    const products = await firebase
      .firestore()
      .collection('regularProducts')
      .get()
    const remindedProducts = products.docs
      .map((item) => {
        return {
          name: item.data().name,
          date: item.data().remind,
          userId: [item.data().assign] || []
        }
      })
      .filter((item) => item.date.toDate().getDate() === new Date().getDate())
    console.log(remindedProducts)
  }

  tmp()
  return (
    <>
      <CartTable />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.CART}
      />
    </>
  )
}

CartAll.propTypes = {}
CartAll.defaultProps = {}

export default CartAll
