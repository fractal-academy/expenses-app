import { withLayout } from 'app/components/HOCs/withLayout'
//import components to insert into ROUTES field 'component'
import { SessionLogin } from 'domains/Session/routes'
import { MemberShow, MemberEdit, MemberAll } from 'domains/Member/routes'
import {
  RegularProductAll,
  RegularProductEdit,
  RegularProductShow
} from 'domains/RegularProduct/routes'
import { PurchaseAll, PurchaseShow } from 'domains/Purchase/routes'
import { NotificationAll } from 'domains/Notification/routes'
import { CategoryAll } from 'domains/Category/routes'
import { LogAll } from 'domains/Log/routes'
import { WishAll, WishEdit, WishShow } from 'domains/Wish/routes'
import { CartAll, CartEdit, CartShow } from 'domains/Cart/routes'
import { PersonalCartAll } from 'domains/PersonalCart/routes'
import { StatisticAll } from 'domains/Statistic/routes'
import { RejectLogin } from 'app/components'
import { Settings } from 'app/components/Settings'
import { WalletAll } from 'domains/Wallet/routes'

import ROUTES_PATHS from './routePaths'
import { QRAdd } from 'qr-module/route'

const ROUTES = {
  LOGIN: {
    component: SessionLogin,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  REJECT_LOGIN: {
    render: () => <RejectLogin />,
    path: ROUTES_PATHS.REJECT_LOGIN,
    exact: true
  },
  MEMBER_SHOW: {
    component: withLayout({ goBack: true, title: 'Profile' })(MemberShow),
    path: ROUTES_PATHS.MEMBER_SHOW,
    exact: true
  },
  MEMBER_EDIT: {
    component: withLayout({ goBack: true, title: 'Edit profile' })(MemberEdit),
    path: ROUTES_PATHS.MEMBER_EDIT
  },
  MEMBERS_ALL: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Members' })(MemberAll),
    path: ROUTES_PATHS.MEMBERS_ALL
  },
  REGULAR_PRODUCTS_ALL: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Regular products' })(
      RegularProductAll
    ),
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    exact: true
  },
  PURCHASE_ALL: {
    protect: ['admin', 'observer'],
    component: withLayout({ goBack: true, title: 'Purchases' })(PurchaseAll),
    path: ROUTES_PATHS.PURCHASE_ALL,
    exact: true
  },
  NOTIFICATIONS_ALL: {
    component: withLayout({ goBack: true, title: 'Notifications' })(
      NotificationAll
    ),
    path: ROUTES_PATHS.NOTIFICATIONS_ALL
  },
  CATEGORIES_ALL: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Categories' })(CategoryAll),
    path: ROUTES_PATHS.CATEGORIES_ALL
  },
  LOGS_ALL: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Logs' })(LogAll),
    path: ROUTES_PATHS.LOGS_ALL
  },
  WISHES_ALL: {
    component: withLayout()(WishAll),
    path: ROUTES_PATHS.WISHES_ALL,
    exact: true
  },
  CARTS_ALL: {
    protect: ['admin'],
    component: withLayout()(CartAll),
    path: ROUTES_PATHS.CART_ALL,
    exact: true
  },
  PERSONAL_CART_ALL: {
    protect: ['admin'],
    component: withLayout()(PersonalCartAll),
    path: ROUTES_PATHS.PERSONAL_CART_ALL,
    exact: true
  },
  STATISTICS_ALL: {
    protect: ['admin', 'observer'],
    component: withLayout()(StatisticAll),
    path: ROUTES_PATHS.STATISTICS_ALL
  },
  SETTINGS: {
    protect: ['admin'],
    component: withLayout()(Settings),
    path: ROUTES_PATHS.SETTINGS
  },
  WALLETS_ALL: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Wallets' })(WalletAll),
    path: ROUTES_PATHS.WALLETS_ALL
  },
  CART_SHOW: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Cart product' })(CartShow),
    path: ROUTES_PATHS.CART_SHOW,
    exact: true
  },
  CART_EDIT: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Edit cart product' })(
      CartEdit
    ),
    path: ROUTES_PATHS.CART_EDIT
  },
  WISH_SHOW: {
    component: withLayout({ goBack: true, title: 'Wish product' })(WishShow),
    path: ROUTES_PATHS.WISHES_SHOW,
    exact: true
  },
  WISH_EDIT: {
    component: withLayout({ goBack: true, title: 'Edit wish product' })(
      WishEdit
    ),
    path: ROUTES_PATHS.WISHES_EDIT
  },
  REGULAR_PRODUCT_SHOW: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Regular product' })(
      RegularProductShow
    ),
    path: ROUTES_PATHS.REGULAR_PRODUCT_SHOW,
    exact: true
  },
  REGULAR_PRODUCT_EDIT: {
    protect: ['admin'],
    component: withLayout({ goBack: true, title: 'Edit regular product' })(
      RegularProductEdit
    ),
    path: ROUTES_PATHS.REGULAR_PRODUCT_EDIT
  },
  PURCHASE_SHOW: {
    component: withLayout({ goBack: true, title: 'Purchase' })(PurchaseShow),
    path: ROUTES_PATHS.PURCHASE_SHOW
  },
  QR: {
    protect: ['admin'],
    component: withLayout({ title: 'Add new wish' })(QRAdd),
    path: ROUTES_PATHS.QR_ADD_WISH
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
