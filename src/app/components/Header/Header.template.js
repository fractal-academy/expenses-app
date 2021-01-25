import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import Dropdown from '../Dropdown/Dropdown.template'
import { MenuList } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'flex-end'
  }
}))
const DropdownList = (
  <MenuList>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Log out</MenuItem>
  </MenuList>
)
const Header = (props) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar className={classes.root}>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Dropdown overlay={DropdownList}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit">
            <AccountCircle />
          </IconButton>
        </Dropdown>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
