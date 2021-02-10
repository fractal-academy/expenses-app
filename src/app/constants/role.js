import ROUTES_PATHS from './routePaths'
const ROLES = ['admin', 'user', 'observer']

//TODO refactor
const START_PAGE = {
  USER: ROUTES_PATHS.WISHES_ALL,
  ADMIN: ROUTES_PATHS.CART_ALL,
  OBSERVER: ROUTES_PATHS.STATISTICS_ALL
}
export default ROLES

export { START_PAGE }
