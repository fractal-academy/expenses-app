import { Avatar, Typography, Divider } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Row, Col, Container } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
import moment from 'moment'

const NotificationAdvancedView = (props) => {
  const {
    notificationAvatar,
    notificationText,
    notificationTime,
    verticalAlignment,
    horizontalAlignment,
    textMaxWidth
  } = props

  return (
    <Container>
      <Row v={verticalAlignment} h={horizontalAlignment}>
        <Col cw="2">
          <Avatar alt="user" src={notificationAvatar}>
            <AccountCircleIcon />
          </Avatar>
        </Col>
        <Col cw="9" maxWidth={textMaxWidth}>
          <Typography>{notificationText}</Typography>
        </Col>
        <Col>
          <Typography>
            {moment(notificationTime).format('Qo MMM, hA')}
          </Typography>
        </Col>
      </Row>
      <Divider />
    </Container>
  )
}

NotificationAdvancedView.propTypes = {
  notificationAvatar: PropTypes.string,
  notificationText: PropTypes.string.isRequired,
  notificationTime: PropTypes.number.isRequired,
  verticalAlignment: PropTypes.string,
  horizontalAlignment: PropTypes.string,
  textMaxWidth: PropTypes.string
}

export default NotificationAdvancedView
