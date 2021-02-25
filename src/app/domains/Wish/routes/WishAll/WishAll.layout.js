import { COLLECTIONS } from 'app/constants'
import { WishTable } from 'app/domains/Wish/components/table'
import { ProductCombinedForm } from 'domains/Product/components/combined/ProductCombinedForm'
import { useSession } from 'app/context/SessionContext'

/**
 * @info WishAll (18 Jan 2020) // CREATION DATE
 *
 * @since 17 Feb 2021 ( v.0.0.5 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const WishAll = () => {
  // [ADDITIONAL_HOOKS]
  const session = useSession()

  // [TEMPLATE]
  return (
    <>
      <WishTable actions={session.role === 'admin'} />
      <ProductCombinedForm
        title="Create Product"
        specificProductToAdd="Add wish"
        collectionName={COLLECTIONS.WISHES}
      />
    </>
  )
}

WishAll.propTypes = {}

export default WishAll
