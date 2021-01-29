import { withLayout } from 'components/HOCs/withLayout'
//import components to insert into ROUTES field 'component'
import { SessionLogin } from 'domains/Session/routes'
import { MemberShow, MemberEdit, MemberAll } from 'domains/Member/routes'
import { ProductShow, ProductEdit, ProductAll } from 'domains/Product/routes'
import { RegularProductAll } from 'domains/RegularProduct/routes'
import { PurchaseAll } from 'domains/Purchase/routes'
import { NotificationAll } from 'domains/Notification/routes'
import { CategoryAll } from 'domains/Category/routes'
import { LogAll } from 'domains/Log/routes'
import { WishAll } from 'domains/Wish/routes'
import { CartAll } from 'domains/Cart/routes'
import { StatisticAll } from 'domains/Statistic/routes'
import { Settings } from 'app/components'

import ROUTES_PATHS from './routePaths'

const ROUTES = {
  LOGIN: {
    component: SessionLogin,
    path: ROUTES_PATHS.LOGIN
  },
  MEMBER_SHOW: {
    component: withLayout({ goBack: true })(MemberShow),
    path: ROUTES_PATHS.MEMBER_SHOW,
    exact: true
  },
  MEMBER_EDIT: {
    component: withLayout()(MemberEdit),
    path: ROUTES_PATHS.MEMBER_EDIT
  },
  MEMBERS_ALL: {
    component: withLayout({ goBack: true })(MemberAll),
    path: ROUTES_PATHS.MEMBERS_ALL
  },
  PRODUCT_SHOW: {
    component: withLayout({ goBack: true })(ProductShow),
    path: ROUTES_PATHS.PRODUCT_SHOW,
    exact: true
  },
  PRODUCT_EDIT: {
    component: withLayout()(ProductEdit),
    path: ROUTES_PATHS.PRODUCT_EDIT
  },
  PRODUCTS_ALL: {
    component: withLayout()(ProductAll),
    path: ROUTES_PATHS.PRODUCTS_ALL
  },
  REGULAR_PRODUCTS_ALL: {
    component: withLayout({ goBack: true })(RegularProductAll),
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL
  },
  PURCHASE_ALL: {
    component: withLayout({ goBack: true })(PurchaseAll),
    path: ROUTES_PATHS.PURCHASE_ALL
  },
  NOTIFICATIONS_ALL: {
    component: withLayout({ goBack: true })(NotificationAll),
    path: ROUTES_PATHS.NOTIFICATIONS_ALL
  },
  CATEGORIES_ALL: {
    component: withLayout({ goBack: true })(CategoryAll),
    path: ROUTES_PATHS.CATEGORIES_ALL
  },
  LOGS_ALL: {
    component: withLayout({ goBack: true })(LogAll),
    path: ROUTES_PATHS.LOGS_ALL
  },
  WISHES_ALL: {
    component: withLayout()(WishAll),
    path: ROUTES_PATHS.WISHES_ALL
  },
  CARTS_ALL: {
    component: withLayout()(CartAll),
    path: ROUTES_PATHS.CART_ALL
  },
  STATISTICS_ALL: {
    component: withLayout()(StatisticAll),
    path: ROUTES_PATHS.STATISTICS_ALL
  },
  SETTINGS: {
    component: withLayout()(Settings),
    path: ROUTES_PATHS.SETTINGS
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
