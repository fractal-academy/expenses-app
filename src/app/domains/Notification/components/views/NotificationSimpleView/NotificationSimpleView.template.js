import { Notifications } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { useNotification } from 'app/context/NotificationContext'
import { useStyles } from './NotificationSimpleView.style'

/**
 * @info NotificationSimpleView (18 Jan 2020) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationSimpleView = () => {
  // [CUSTOM_HOOKS]
  const history = useHistory()
  const notification = useNotification()
  const classes = useStyles()

  // [TEMPLATE]
  return (
    <IconButton onClick={() => history.push(ROUTES_PATHS.NOTIFICATIONS_ALL)}>
      <Badge badgeContent={notification?.length} max={99} color="secondary">
        <Notifications className={classes.root} />
      </Badge>
    </IconButton>
  )
}

export default NotificationSimpleView
