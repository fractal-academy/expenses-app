import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import Dropdown from '../Dropdown/Dropdown.template'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Box } from '@material-ui/core'
import { useStyles } from './Header.style'
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem.template'

const DropdownList = (
  <div>
    <DropdownItem divider>
      <AccountCircle />
      Profile
    </DropdownItem>
    <DropdownItem divider danger>
      <ExitToAppIcon />
      Log out
    </DropdownItem>
  </div>
)

const Header = (props) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton>
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box>
          <Dropdown overlay={DropdownList}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true">
              <AccountCircle />
            </IconButton>
          </Dropdown>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
