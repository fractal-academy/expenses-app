import { Notifications } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { useNotification } from 'app/context/NotificationContext'
import { useStyles } from './NotificationSimpleView.style'
import { useSession } from 'app/context/SessionContext'

/**
 * @info NotificationSimpleView (18 Jan 2020) // CREATION DATE
 *
 * @since 22 Feb 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationSimpleView = () => {
  // [CUSTOM_HOOKS]
  const history = useHistory()
  const notification = useNotification()
  const session = useSession()
  const classes = useStyles()

  // [COMPUTED_PROPERTIES]
  const notificationCount =
    notification &&
    notification.filter((item) => item.viewed && !item.viewed[session.id])
      .length

  // [TEMPLATE]
  return (
    <IconButton onClick={() => history.push(ROUTES_PATHS.NOTIFICATIONS_ALL)}>
      <Badge badgeContent={notificationCount || 0} max={99} color="error">
        <Notifications className={classes.root} />
      </Badge>
    </IconButton>
  )
}

export default NotificationSimpleView
