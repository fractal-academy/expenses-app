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

const MENU_ITEMS = [
  { path: ROUTES_PATHS.CART_ALL, icon: <ShoppingCart />, label: 'Cart' },
  { path: ROUTES_PATHS.STATISTICS_ALL, icon: <BarChart />, label: 'Statistic' },
  { path: ROUTES_PATHS.SETTINGS, icon: <Settings />, label: 'Settings' }
]

const Navbar = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState()
  const history = useHistory()

  useEffect(() => {
    setValue(
      MENU_ITEMS.findIndex((item) => item.path === history.location.pathname)
    )
  }, [history])

  const onMenuChange = (event, newPage) => setValue(newPage)

  return (
    <AppBar className={classes.root} component="nav" position="sticky">
      <BottomNavigation value={value} onChange={onMenuChange} showLabels>
        {MENU_ITEMS.map((menuItem) => (
          <BottomNavigationAction
            label={menuItem.label}
            icon={menuItem.icon}
            key={menuItem.label}
            onClick={() => history.push(menuItem.path)}
          />
        ))}
      </BottomNavigation>
    </AppBar>
  )
}
export default Navbar
