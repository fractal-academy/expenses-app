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

const SETTINGS_MENU = [
  { title: 'Members', path: ROUTES_PATHS.MEMBERS_ALL, icon: <Group /> },
  {
    title: 'Categories',
    path: ROUTES_PATHS.CATEGORIES_ALL,
    icon: <AccountBalanceWallet />
  },
  { title: 'Logs', path: ROUTES_PATHS.LOGS_ALL, icon: <Assignment /> },
  {
    title: 'Regular products',
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    icon: <ViewList />
  },
  { title: 'Purchases', path: ROUTES_PATHS.PURCHASE_ALL, icon: <Receipt /> },
  { title: 'Wallets', path: ROUTES_PATHS.WALLETS_ALL, icon: <CreditCard /> }
]

const Settings = (props) => {
  const history = useHistory()
  return (
    <List>
      {SETTINGS_MENU.map((menuItem) => {
        return (
          <Container mb={3} key={menuItem.path}>
            <Row>
              <Col>
                <Paper onClick={() => history.push(menuItem.path)}>
                  <Row>
                    <Col cw="auto" v="center" p="2">
                      {menuItem.icon}
                    </Col>
                    <Col cw="auto" v="center">
                      <Typography variant="subtitle1">
                        {menuItem.title}
                      </Typography>
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
