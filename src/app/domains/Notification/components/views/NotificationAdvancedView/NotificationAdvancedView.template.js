import PropTypes from 'prop-types'
import moment from 'moment'
import { Typography, Divider } from '@material-ui/core'
import { Row, Col, Container } from '@qonsoll/react-design'
import { MemberSimpleView } from 'domains/Member/components/views'

/**
 * @info NotificationAdvancedView (18 Jan 2020) // CREATION DATE
 *
 * @since 15 Feb 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationAdvancedView = (props) => {
  // [INTERFACES]
  const {
    userAvatar,
    notificationText,
    notificationTime,
    verticalAlignment,
    horizontalAlignment
  } = props

  // [COMPUTED_PROPERTIES]
  const notificationDate = moment(notificationTime).fromNow()

  // [TEMPLATE]
  return (
    <Container mb={2}>
      <Row v={verticalAlignment} h={horizontalAlignment} p={2}>
        <Col cw="auto" v="flex-start">
          <MemberSimpleView avatarURL={userAvatar} avatarSize="sm" />
        </Col>
        <Col>
          <Typography align="right" variant="caption">
            {notificationDate}
          </Typography>
          <Typography>{notificationText}</Typography>
        </Col>
      </Row>
      <Divider />
    </Container>
  )
}

NotificationAdvancedView.propTypes = {
  userAvatar: PropTypes.string,
  notificationText: PropTypes.string.isRequired,
  notificationTime: PropTypes.instanceOf(Date),
  verticalAlignment: PropTypes.string,
  horizontalAlignment: PropTypes.string
}

export default NotificationAdvancedView
