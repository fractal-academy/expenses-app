import { NotificationAdvancedView } from 'domains/Notification/components/views'

/**
 * @info NotificationList (19 Jan 2020) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const NotificationList = (props) => {
  // [INTERFACES]
  const { notifications } = props

  // [TEMPLATE]
  return (
    <>
      {notifications.map((notification) => {
        const { id, ...rest } = notification
        return (
          <NotificationAdvancedView
            key={id}
            verticalAlignment="center"
            horizontalAlignment="around"
            {...rest}
          />
        )
      })}
    </>
  )
}

export default NotificationList
