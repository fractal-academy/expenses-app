import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
  Typography,
  Divider
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Row, Col, Container } from '@qonsoll/react-design'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  notificationTimeField: {
    maxWidth: 'fit-content'
  },
  avatarField: {
    minWidth: 'fit-content',
    marginRight: 16
  }
})

const NotificationAdvancedView = (props) => {
  const { notificationAvatar, notificationText, notificationTime } = props
  const classes = useStyles()

  return (
    <Container>
      <Row p="2" v="center">
        <Col cw={[2]}>
          {notificationAvatar ? (
            <Avatar alt="User" src={notificationAvatar} />
          ) : (
            <AccountCircleIcon />
          )}
        </Col>
        <Col cw={[8]}>
          <Typography>{notificationText}</Typography>
        </Col>
        <Col cw={2}>
          <Typography>{notificationTime / 3600}h</Typography>
        </Col>
      </Row>
      <Divider />
    </Container>
  )
}

NotificationAdvancedView.propTypes = {
  notificationAvatar: PropTypes.string.isRequired,
  notificationText: PropTypes.string.isRequired,
  notificationTime: PropTypes.number.isRequired
}
NotificationAdvancedView.defaultProps = {}

export default NotificationAdvancedView
