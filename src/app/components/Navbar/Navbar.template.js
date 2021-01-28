import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BarChartIcon from '@material-ui/icons/BarChart'
import SettingsIcon from '@material-ui/icons/Settings'
import { AppBar } from '@material-ui/core'
import { useStyles } from './Navbar.style'

// const classes = makeStyles(styles)

const Navbar = (props) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

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

Navbar.propTypes = {}
Navbar.defaultProps = {}

export default Navbar
