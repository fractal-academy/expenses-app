import { List, Paper, Typography } from '@material-ui/core'
import { Category, Group, Cake, Assignment } from '@material-ui/icons'
import { Container, Row, Col } from '@qonsoll/react-design'

const PAGES = {
  Users: <Category color="primary" fontSize="large" />,
  Products: <Group color="primary" fontSize="large" />,
  Categories: <Cake color="primary" fontSize="large" />,
  Logs: <Assignment color="primary" fontSize="large" />
}
const PAGES_KEYS = Object.keys(PAGES)

const Settings = () => {
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

export default Settings
