import { List, Paper, Typography } from '@material-ui/core'
import {
  Receipt,
  Group,
  ViewList,
  AccountBalanceWallet,
  Assignment,
  CreditCard
} from '@material-ui/icons'
import { Container, Row, Col } from '@qonsoll/react-design'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import COLOR from 'app/constants/colors'

const SETTINGS_MENU = [
  {
    title: 'Members',
    path: ROUTES_PATHS.MEMBERS_ALL,
    icon: <Group style={{ color: COLOR.CORAL.color }} />
  },
  {
    title: 'Categories',
    path: ROUTES_PATHS.CATEGORIES_ALL,
    icon: <AccountBalanceWallet style={{ color: COLOR.AQUAMARINE.color }} />
  },
  {
    title: 'Logs',
    path: ROUTES_PATHS.LOGS_ALL,
    icon: <Assignment style={{ color: COLOR.LAVENDER.color }} />
  },
  {
    title: 'Regular products',
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    icon: <ViewList style={{ color: COLOR.BLUE.color }} />
  },
  {
    title: 'Purchases',
    path: ROUTES_PATHS.PURCHASE_ALL,
    icon: <Receipt style={{ color: COLOR.SALMON.color }} />
  },
  {
    title: 'Wallets',
    path: ROUTES_PATHS.WALLETS_ALL,
    icon: <CreditCard style={{ color: COLOR.BLUE_VIOLET.color }} />
  }
]

const Settings = (props) => {
  const history = useHistory()
  return (
    <List>
      {SETTINGS_MENU.map((menuItem) => {
        return (
          <Container mb={2} key={menuItem.path}>
            <Row>
              <Col>
                <Paper onClick={() => history.push(menuItem.path)}>
                  <Row>
                    <Col cw="auto" v="center" p="3">
                      {menuItem.icon}
                    </Col>
                    <Col cw="auto" v="center">
                      <Typography variant="body1">{menuItem.title}</Typography>
                    </Col>
                  </Row>
                </Paper>
              </Col>
            </Row>
          </Container>
        )
      })}
    </List>
  )
}

Settings.propTypes = {}
Settings.defaultProps = {}

export default Settings
