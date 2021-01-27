import DropdownItem from './DropdownItem.template'
import { Col, Container, Row } from '@qonsoll/react-design'
import Dropdown from '../Dropdown.template'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'

const metadata = {
  title: 'components/DropdownItem',
  component: DropdownItem
}
export default metadata

const Template = (args) => (
  <Container>
    <Row h="center" v="center">
      <Col cw="auto">
        <DropdownItem danger={true}>
          <ExitToAppIcon />
          <Typography>Log out</Typography>
        </DropdownItem>
      </Col>
    </Row>
  </Container>
)
export const DropdownItemStory = Template.bind({})

DropdownItemStory.args = {}
