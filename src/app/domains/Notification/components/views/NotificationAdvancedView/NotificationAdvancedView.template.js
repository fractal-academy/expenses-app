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
    horizontalAlignment
  } = props

  return (
    <Container mb={2}>
      <Row v={verticalAlignment} h={horizontalAlignment} p={2}>
        <Col cw="auto" v="flex-start">
          <Avatar alt="user" src={notificationAvatar}>
            <AccountCircleIcon />
          </Avatar>
        </Col>
        <Col>
          <Typography align="right" variant="caption">
            {moment(notificationTime).fromNow()}
          </Typography>
          <Typography>{notificationText}</Typography>
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
  horizontalAlignment: PropTypes.string
}

export default NotificationAdvancedView
