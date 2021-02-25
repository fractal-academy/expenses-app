import { WishEdit } from 'domains/Wish/routes'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'

/**
 * @info QrAdd (15 Feb 2021) // CREATION DATE
 *
 * @since 16 Feb 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const QrAdd = () => (
  <WishEdit
    buttonProps={{ visibleCancel: false, submitText: 'add Wish' }}
    collectionName={COLLECTIONS.REGULAR_PRODUCTS}
    pushTo={ROUTES_PATHS.WISHES_ALL}
  />
)

export default QrAdd
