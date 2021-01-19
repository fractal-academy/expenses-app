import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'
import { IconButton, Badge } from '@material-ui/core'
import PropTypes from 'prop-types'

const NotificationSimpleView = (props) => {
  const { notificationsNumber } = props

  return (
    <IconButton size="large">
      <Badge badgeContent={notificationsNumber} max={99} color="secondary">
        <NotificationsNoneRoundedIcon />
      </Badge>
    </IconButton>
  )
}

NotificationSimpleView.propTypes = { notificationsNumber: PropTypes.number }
NotificationSimpleView.defaultProps = {}

export default NotificationSimpleView
