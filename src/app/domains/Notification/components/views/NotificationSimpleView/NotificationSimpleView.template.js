import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'
import { IconButton, Badge } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const NotificationSimpleView = (props) => {
  const { notificationsNumber } = props

  const [notificationQuantity, setNotificationQuantity] = useState(
    notificationsNumber
  )

  return (
    <IconButton size="large">
      <Badge badgeContent={notificationQuantity} max={99} color="secondary">
        <NotificationsNoneRoundedIcon />
      </Badge>
    </IconButton>
  )
}

NotificationSimpleView.propTypes = {
  notificationsNumber: PropTypes.number.isRequired
}
NotificationSimpleView.defaultProps = {}

export default NotificationSimpleView
