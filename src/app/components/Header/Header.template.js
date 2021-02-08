import { Container, Row, Col, Box } from '@qonsoll/react-design'
import {
  Badge,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
  Paper
} from '@material-ui/core'
import {
  AccountCircle,
  Notifications,
  ExitToApp,
  ArrowBack
} from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { DropdownItem, Dropdown } from 'components/Lib'
import { ROUTES_PATHS, ROUTES, ROUTES_TITLES } from 'app/constants'
import { useStyles } from './Header.style'

const Header = (props) => {
  const { goBack, title } = props
  let history = useHistory()
  const classes = useStyles(props)

  const DropdownList = (
    <div>
      <DropdownItem
        divider
        onClick={() => history.push(ROUTES_PATHS.MEMBER_SHOW)}>
        <AccountCircle />
        Profile
      </DropdownItem>
      <DropdownItem
        divider
        danger
        onClick={() => history.push(ROUTES_PATHS.LOGIN)}>
        <ExitToApp />
        Log out
      </DropdownItem>
    </div>
  )

  const redirect = () => history.goBack()

  return (
    <Container>
      <Row noGutters mb={2}>
        <Col>
          <AppBar className={classes.appBar} position="sticky">
            <Toolbar className={classes.toolBar}>
              <Box display="flex" style={{ alignItems: 'center' }}>
                {goBack && (
                  <>
                    <IconButton edge="start" onClick={redirect}>
                      <ArrowBack />
                    </IconButton>
                    <Divider
                      className={classes.divider}
                      orientation="vertical"
                    />
                  </>
                )}
                <Typography color="textPrimary" variant="body1">
                  {ROUTES_TITLES[window.location.pathname]}
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
        </Col>
      </Row>
    </Container>
  )
}

export default Header
