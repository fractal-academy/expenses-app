import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BarChartIcon from '@material-ui/icons/BarChart'
import SettingsIcon from '@material-ui/icons/Settings'
import { AppBar } from '@material-ui/core'
import { useStyles } from './Navbar.style'
import { useState } from 'react'

const Navbar = (props) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  return (
    <AppBar className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels>
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Statistic" icon={<BarChartIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </AppBar>
  )
}
export default Navbar
