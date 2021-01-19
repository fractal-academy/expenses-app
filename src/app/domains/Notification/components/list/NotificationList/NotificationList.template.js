import { NotificationAdvancedView } from '../../views/NotificationAdvancedView'
import { useState } from 'react'
import { List } from '@material-ui/core'
import PropTypes from 'prop-types'

const NotificationList = (props) => {
  const { notificationData } = props
  const [notifications, setNotifications] = useState(notificationData)

  return (
    <List>
      {notifications.map((item) => (
        <NotificationAdvancedView
          notificationAvatar={item.avatar}
          notificationText={item.notificationText}
          notificationTime={item.notificationTime}
        />
      ))}
    </List>
  )
}

NotificationList.propTypes = {
  notificationData: PropTypes.arrayOf(
    PropTypes.shape({
      notificationAvatar: PropTypes.string,
      notificationText: PropTypes.string,
      notificationTime: PropTypes.number
    })
  )
}
NotificationList.defaultProps = {}

export default NotificationList
