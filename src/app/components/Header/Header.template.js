import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import Dropdown from '../Dropdown/Dropdown.template'
import MenuItem from '@material-ui/core/MenuItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Box } from '@material-ui/core'
import styles from './Header.style'

const useStyles = makeStyles(styles)

const DropdownList = (
  <div>
    <MenuItem>
      <AccountCircle />
      Profile
    </MenuItem>
    <MenuItem>
      <ExitToAppIcon />
      Log out
    </MenuItem>
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
