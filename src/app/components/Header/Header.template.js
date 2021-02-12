import { Box } from '@qonsoll/react-design'
import {
  Badge,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider
} from '@material-ui/core'
import {
  AccountCircle,
  Notifications,
  ExitToApp,
  ArrowBack
} from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { DropdownItem, Dropdown } from 'components/Lib'
import { ROUTES_PATHS } from 'app/constants'
import { useStyles } from './Header.style'
import { NotificationSimpleView } from 'domains/Notification/components/views'
import { auth } from 'app/services/Auth'

const Header = (props) => {
  // INTERFACE
  const { goBack, title } = props
  const history = useHistory()
  const classes = useStyles(props)

  // DROPDOWN OVERLAY ELEMENT
  const DropdownList = (
    <div>
      <DropdownItem
        divider
        onClick={() => history.push(ROUTES_PATHS.MEMBER_SHOW)}>
        <AccountCircle />
        Profile
      </DropdownItem>
      <DropdownItem divider danger onClick={() => auth.signOut()}>
        <ExitToApp />
        Log out
      </DropdownItem>
    </div>
  )

  const redirect = () => history.goBack()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Box display="flex" style={{ alignItems: 'center' }}>
          {goBack && (
            <>
              <IconButton edge="start" onClick={redirect}>
                <ArrowBack />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
            </>
          )}
          <Typography color="textPrimary" variant="body1">
            {title}
          </Typography>
        </Box>
        <Box display="flex">
          <IconButton
            onClick={() => history.push(ROUTES_PATHS.NOTIFICATIONS_ALL)}>
            <Badge badgeContent={11} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
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
