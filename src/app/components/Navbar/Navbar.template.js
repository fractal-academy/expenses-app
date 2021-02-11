import { useState, useEffect } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar
} from '@material-ui/core'
import { ShoppingCart, BarChart, Settings } from '@material-ui/icons'
import { ROUTES_PATHS } from 'app/constants'
import { useStyles } from './Navbar.style'
import { useHistory } from 'react-router-dom'
import { useSession } from 'app/context/SessionContext'

const MENU_ITEMS = [
  {
    path: (role) =>
      role === 'user' ? ROUTES_PATHS.WISHES_ALL : ROUTES_PATHS.CART_ALL,
    icon: <ShoppingCart />,
    label: (role) => (role === 'user' ? 'Wishes' : 'Cart'),
    hide: ['observer']
  },
  {
    path: () => ROUTES_PATHS.STATISTICS_ALL,
    icon: <BarChart />,
    label: () => 'Statistic',
    hide: ['user']
  },
  {
    path: () => ROUTES_PATHS.SETTINGS,
    icon: <Settings />,
    label: () => 'Settings',
    hide: ['user', 'observer']
  }
]

const Navbar = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState()
  let history = useHistory()
  const session = useSession()
  useEffect(() => {
    setValue(
      MENU_ITEMS.findIndex((item) => item.path === history.location.pathname)
    )
  }, [history])

  const onMenuChange = (event, newPage) => setValue(newPage)

  return (
    <AppBar className={classes.root} component="nav" position="sticky">
      <BottomNavigation value={value} onChange={onMenuChange} showLabels>
        {MENU_ITEMS.map(
          (menuItem) =>
            !menuItem.hide.includes(session.role) && (
              <BottomNavigationAction
                label={menuItem.label(session.role)}
                icon={menuItem.icon}
                key={menuItem.label}
                onClick={() => history.push(menuItem.path(session.role))}
              />
            )
        )}
      </BottomNavigation>
    </AppBar>
  )
}
export default Navbar
