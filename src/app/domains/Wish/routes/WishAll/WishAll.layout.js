import { WishTable } from 'app/domains/Wish/components/table/'
import { WishCombined } from 'domains/Wish/components/combined'

const WishAll = (props) => {
  return (
    <>
      <WishTable />
      <WishCombined title="Create wish" />
    </>
  )
}

WishAll.propTypes = {}
WishAll.defaultProps = {}

export default WishAll
