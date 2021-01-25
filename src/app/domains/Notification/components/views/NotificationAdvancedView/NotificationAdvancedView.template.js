import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
  Divider
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
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
    <div>
      <ListItem>
        <ListItemAvatar className={classes.avatarField}>
          {notificationAvatar ? (
            <Avatar alt="User" src={notificationAvatar} />
          ) : (
            <AccountCircleIcon />
          )}
        </ListItemAvatar>
        <ListItemText>{notificationText}</ListItemText>
        <ListItemText className={classes.notificationTimeField}>
          {notificationTime / 3600}h
        </ListItemText>
      </ListItem>
      <Divider />
    </div>
  )
}

NotificationAdvancedView.propTypes = {
  notificationAvatar: PropTypes.string.isRequired,
  notificationText: PropTypes.string.isRequired,
  notificationTime: PropTypes.number.isRequired
}
NotificationAdvancedView.defaultProps = {}

export default NotificationAdvancedView
