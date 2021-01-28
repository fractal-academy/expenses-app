import { Badge, Toolbar, AppBar, IconButton } from '@material-ui/core'
import { AccountCircle, Notifications, ExitToApp } from '@material-ui/icons'
import Dropdown from '../Dropdown/Dropdown.template'
import { Box } from '@qonsoll/react-design'
import { useStyles } from './Header.style'
import { DropdownItem } from '../Dropdown/DropdownItem'

const DropdownList = (
  <div>
    <DropdownItem divider>
      <AccountCircle />
      Profile
    </DropdownItem>
    <DropdownItem divider danger>
      <ExitToApp />
      Log out
    </DropdownItem>
  </div>
)

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton>
          <Badge badgeContent={11} color="secondary">
            <Notifications />
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

export default Header
