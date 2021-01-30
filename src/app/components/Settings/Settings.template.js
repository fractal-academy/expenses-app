import { List, Paper, Typography } from '@material-ui/core'
import { Category, Group, Cake, Assignment } from '@material-ui/icons'
import { Container, Row, Col } from '@qonsoll/react-design'

import { ROUTES_PATHS } from 'app/constants'

const SETTINGS_MENU = [
  { title: 'Members', path: ROUTES_PATHS.MEMBERS_ALL },
  { title: 'Categories', path: ROUTES_PATHS.CATEGORIES_ALL },
  { title: 'Logs', path: ROUTES_PATHS.LOGS_ALL },
  { title: 'Products list', path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL },
  { title: 'Purchase', path: ROUTES_PATHS.PURCHASE_ALL }
]

const Settings = (props) => {
  return (
    <List>
      {PAGES_KEYS.map((page) => {
        return (
          <Container mb={3}>
            <Row>
              <Col>
                <Paper>
                  <Row>
                    <Col cw="auto" v="center" p="2">
                      {PAGES[page]}
                    </Col>
                    <Col cw="auto" v="center">
                      <Typography variant="subtitle1">{page}</Typography>
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
