import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'
import { IconButton, Badge } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const NotificationSimpleView = (props) => {
  const { notificationsNumber, buttonSize } = props

  return (
    <IconButton size={buttonSize}>
      <Badge badgeContent={notificationsNumber} max={99} color="secondary">
        <NotificationsNoneRoundedIcon />
      </Badge>
    </IconButton>
  )
}

NotificationSimpleView.propTypes = {
  notificationsNumber: PropTypes.number.isRequired,
  buttonSize: PropTypes.string.isRequired
}

export default NotificationSimpleView
