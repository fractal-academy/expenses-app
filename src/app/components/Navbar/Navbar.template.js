import { useState, useEffect } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar
} from '@material-ui/core'
import { ShoppingCart, BarChart, Settings, ListAlt } from '@material-ui/icons'
import { ROUTES_PATHS } from 'app/constants'
import { useStyles } from './Navbar.style'
import { useHistory } from 'react-router-dom'
import { useSession } from 'app/context/SessionContext'

const MENU_ITEMS = [
  {
    path: (role) =>
      role === 'user' ? ROUTES_PATHS.WISHES_ALL : ROUTES_PATHS.CART_ALL,
    icon: () => <ShoppingCart />,
    label: (role) => (role === 'user' ? 'Wishes' : 'Cart'),
    hide: ['observer']
  },
  {
    path: () => ROUTES_PATHS.STATISTICS_ALL,
    icon: () => <BarChart />,
    label: () => 'Statistic',
    hide: ['user']
  },
  {
    path: (role) =>
      role === 'observer' ? ROUTES_PATHS.PURCHASE_ALL : ROUTES_PATHS.SETTINGS,
    icon: (role) => (role === 'observer' ? <ListAlt /> : <Settings />),
    label: (role) => (role === 'observer' ? 'Purchase' : 'Settings'),
    hide: ['user']
  }
]

const Navbar = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState()
  const history = useHistory()
  const user = useSession()
  useEffect(() => {
    setValue(
      MENU_ITEMS.findIndex(
        (item) => item.path(user.role) === history.location.pathname
      )
    )
  }, [history])

  const onMenuChange = (event, newPage) => setValue(newPage)

  return (
    <AppBar className={classes.root} component="nav">
      {user.role !== 'user' && (
        <BottomNavigation
          className={classes.bottomNav}
          value={value}
          onChange={onMenuChange}
          showLabels>
          {MENU_ITEMS.map(
            (menuItem) =>
              !menuItem.hide.includes(user.role) && (
                <BottomNavigationAction
                  label={menuItem.label(user.role)}
                  icon={menuItem.icon(user.role)}
                  key={menuItem.label()}
                  onClick={() => history.push(menuItem.path(user.role))}
                />
              )
          )}
        </BottomNavigation>
      )}
    </AppBar>
  )
}
export default Navbar
