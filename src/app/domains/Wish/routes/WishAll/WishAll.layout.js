import { COLLECTIONS } from 'app/constants'
import { WishTable } from 'app/domains/Wish/components/table'
import { ProductCombinedForm } from 'domains/Product/components/combined/ProductCombinedForm'

const WishAll = (props) => {
  return (
    <>
      <WishTable />
      <ProductCombinedForm
        title="Create Product"
        collectionName={COLLECTIONS.WISHES}
      />
    </>
  )
}

WishAll.propTypes = {}
WishAll.defaultProps = {}

export default WishAll
