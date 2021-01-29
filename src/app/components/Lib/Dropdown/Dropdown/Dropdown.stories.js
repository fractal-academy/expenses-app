import Dropdown from './Dropdown.template'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { Typography } from '@material-ui/core'
import DropdownItem from '../DropdownItem/DropdownItem.template'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const metadata = {
  title: 'components/Lib/Dropdown',
  component: Dropdown
}

export default metadata

const DropdownList = (
  <Container>
    <DropdownItem danger="true" divider>
      <AccountCircle />
      <Typography>Profile</Typography>
    </DropdownItem>
    <DropdownItem divider>
      <AccountCircle />
      <Typography>Profile</Typography>
    </DropdownItem>
    <DropdownItem success divider>
      <AccountCircle />
      <Typography>Profile</Typography>
    </DropdownItem>
    <DropdownItem divider>
      <AccountCircle />
      <Typography>Profile</Typography>
    </DropdownItem>
    <DropdownItem divider>
      <AccountCircle />
      <Typography>Profile</Typography>
    </DropdownItem>
    <DropdownItem danger="true">
      <ExitToAppIcon />
      <Typography>Log out</Typography>
    </DropdownItem>
  </Container>
)

const Template = () => (
  <Container>
    <Row h="center" v="center">
      <Col cw="auto">
        <Dropdown overlay={DropdownList}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit">
            <AccountCircle />
          </IconButton>
        </Dropdown>
      </Col>
    </Row>
  </Container>
)

export const DropdownStory = Template.bind({})

DropdownStory.args = {}
