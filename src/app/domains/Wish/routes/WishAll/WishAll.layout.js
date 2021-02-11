import { WishTable } from 'app/domains/Wish/components/table'
import { COLLECTIONS } from 'app/constants'
import { ProductCombinedForm } from 'domains/Product/components/combined/ProductCombinedForm'

const WishAll = (props) => {
  return (
    <>
      <WishTable />
      <ProductCombinedForm
        title="Create Product"
        colectionName={COLLECTIONS.WISHES}
      />
    </>
  )
}

WishAll.propTypes = {}
WishAll.defaultProps = {}

export default WishAll
