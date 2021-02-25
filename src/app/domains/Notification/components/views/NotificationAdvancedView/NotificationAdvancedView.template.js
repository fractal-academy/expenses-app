import { useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Typography, Divider, Paper } from '@material-ui/core'
import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { MemberSimpleView } from 'domains/Member/components/views'
import { setData, getData } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import DoneIcon from '@material-ui/icons/Done'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { COLLECTIONS } from 'app/constants'
/**
 * @info NotificationAdvancedView (18 Jan 2020) // CREATION DATE
 *
 * @since 22 Feb 2021 ( v.0.0.5 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationAdvancedView = (props) => {
  // [INTERFACES]
  const {
    id,
    viewed,
    userAvatar,
    notificationText,
    notificationTime,
    verticalAlignment,
    horizontalAlignment
  } = props

  // [CUSTOM_HOOKS]
  const session = useSession()

  // [COMPUTED_PROPERTIES]
  const notificationDate = moment(notificationTime).fromNow()

  // [USE_EFFECTS]
  useEffect(() => {
    if (!viewed) {
      const changeNotificationStatus = async () => {
        const notification = await getData(COLLECTIONS.NOTIFICATIONS, id)
        await setData(COLLECTIONS.NOTIFICATIONS, id, {
          ...notification,
          viewed: { ...notification.viewed, [session.id]: true }
        })
      }
      changeNotificationStatus()
    }
  }, [])

  // [TEMPLATE]
  return (
    <Container my={2} px={2}>
      <Paper>
        <Row v={verticalAlignment} h={horizontalAlignment} p={2}>
          <Col cw="auto" v="flex-start">
            <MemberSimpleView avatarURL={userAvatar} avatarSize="sm" />
          </Col>
          <Col>
            <Box display="flex" justifyContent="space-between">
              <Typography align="right" variant="caption">
                {notificationDate}
              </Typography>
              <Typography align="left" variant="caption">
                {viewed ? (
                  <DoneAllIcon fontSize="inherit" />
                ) : (
                  <DoneIcon fontSize="inherit" />
                )}
              </Typography>
            </Box>
            <Typography>{notificationText}</Typography>
          </Col>
        </Row>
        <Divider />
      </Paper>
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
