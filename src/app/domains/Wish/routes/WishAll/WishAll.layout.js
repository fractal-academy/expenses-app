import { COLLECTIONS } from 'app/constants'
import { WishTable } from 'app/domains/Wish/components/table'
import { ProductCombinedForm } from 'domains/Product/components/combined/ProductCombinedForm'
import { useSession } from 'app/context/SessionContext'
const WishAll = (props) => {
  const session = useSession()
  console.log(session)
  return (
    <>
      <WishTable actions={session.role === 'admin'} />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.WISHES}
      />
    </>
  )
}

WishAll.propTypes = {}

export default WishAll
