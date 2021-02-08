import DropdownItem from './DropdownItem.template'
import { Col, Container, Row } from '@qonsoll/react-design'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'

const metadata = {
  title: 'components/Lib/DropdownItem',
  component: DropdownItem
}
export default metadata

const Template = (args) => (
  <Container>
    <Row h="center" v="center">
      <Col cw="auto">
        <DropdownItem {...args}>
          <ExitToAppIcon />
          <Typography>Log out</Typography>
        </DropdownItem>
      </Col>
    </Row>
  </Container>
)
export const DropdownItemStory = Template.bind({})

DropdownItemStory.args = {
  danger: false,
  success: false
}
