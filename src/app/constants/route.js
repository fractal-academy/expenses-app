import { withLayout } from 'app/components/HOCs/withLayout'
//import components to insert into ROUTES field 'component'
import { SessionLogin } from 'domains/Session/routes'
import { MemberShow, MemberEdit, MemberAll } from 'domains/Member/routes'
import {
  RegularProductAll,
  RegularProductEdit,
  RegularProductShow
} from 'domains/RegularProduct/routes'
import { PurchaseAll } from 'domains/Purchase/routes'
import { NotificationAll } from 'domains/Notification/routes'
import { CategoryAll } from 'domains/Category/routes'
import { LogAll } from 'domains/Log/routes'
import { WishAll, WishEdit, WishShow } from 'domains/Wish/routes'
import { CartAll, CartEdit, CartShow } from 'domains/Cart/routes'
import { StatisticAll } from 'domains/Statistic/routes'
import { Settings } from 'app/components/Settings'
import { WalletAll } from 'domains/Wallet/routes'

import ROUTES_PATHS from './routePaths'

const ROUTES = {
  LOGIN: {
    component: SessionLogin,
    path: ROUTES_PATHS.LOGIN
  },
  MEMBER_SHOW: {
    component: withLayout({ goBack: true, title: 'Member Profile' })(
      MemberShow
    ),
    path: ROUTES_PATHS.MEMBER_SHOW,
    exact: true
  },
  MEMBER_EDIT: {
    component: withLayout({ goBack: true, title: 'Member Edit' })(MemberEdit),
    path: ROUTES_PATHS.MEMBER_EDIT
  },
  MEMBERS_ALL: {
    component: withLayout({ goBack: true, title: 'Members' })(MemberAll),
    path: ROUTES_PATHS.MEMBERS_ALL
  },
  REGULAR_PRODUCTS_ALL: {
    component: withLayout({ goBack: true, title: 'Regular Products' })(
      RegularProductAll
    ),
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    exact: true
  },
  PURCHASE_ALL: {
    component: withLayout({ goBack: true, title: 'Purchases' })(PurchaseAll),
    path: ROUTES_PATHS.PURCHASE_ALL
  },
  NOTIFICATIONS_ALL: {
    component: withLayout({ goBack: true, title: 'Notifications' })(
      NotificationAll
    ),
    path: ROUTES_PATHS.NOTIFICATIONS_ALL
  },
  CATEGORIES_ALL: {
    component: withLayout({ goBack: true, title: 'Categories' })(CategoryAll),
    path: ROUTES_PATHS.CATEGORIES_ALL
  },
  LOGS_ALL: {
    component: withLayout({ goBack: true, title: 'Logs' })(LogAll),
    path: ROUTES_PATHS.LOGS_ALL
  },
  WISHES_ALL: {
    component: withLayout()(WishAll),
    path: ROUTES_PATHS.WISHES_ALL,
    exact: true
  },
  CARTS_ALL: {
    component: withLayout()(CartAll),
    path: ROUTES_PATHS.CART_ALL,
    exact: true
  },
  STATISTICS_ALL: {
    component: withLayout()(StatisticAll),
    path: ROUTES_PATHS.STATISTICS_ALL
  },
  SETTINGS: {
    component: withLayout()(Settings),
    path: ROUTES_PATHS.SETTINGS
  },
  WALLETS_ALL: {
    component: withLayout({ goBack: true, title: 'Wallets' })(WalletAll),
    path: ROUTES_PATHS.WALLETS_ALL
  },
  CART_SHOW: {
    component: withLayout({ goBack: true, title: 'Cart Product Card' })(
      CartShow
    ),
    path: ROUTES_PATHS.CART_SHOW,
    exact: true
  },
  CART_EDIT: {
    component: withLayout({ goBack: true, title: 'Cart Product Edit' })(
      CartEdit
    ),
    path: ROUTES_PATHS.CART_EDIT
  },
  WISH_SHOW: {
    component: withLayout({ goBack: true, title: 'Wish Product Card' })(
      WishShow
    ),
    path: ROUTES_PATHS.WISHES_SHOW,
    exact: true
  },
  WISH_EDIT: {
    component: withLayout({ goBack: true, title: 'Wish Product Edit' })(
      WishEdit
    ),
    path: ROUTES_PATHS.WISHES_EDIT
  },
  REGULAR_PRODUCT_SHOW: {
    component: withLayout(
      { goBack: true },
      { title: true }
    )(RegularProductShow),
    path: ROUTES_PATHS.REGULAR_PRODUCT_SHOW,
    exact: true
  },
  REGULAR_PRODUCT_EDIT: {
    component: withLayout(
      { goBack: true },
      { title: true }
    )(RegularProductEdit),
    path: ROUTES_PATHS.REGULAR_PRODUCT_EDIT
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
