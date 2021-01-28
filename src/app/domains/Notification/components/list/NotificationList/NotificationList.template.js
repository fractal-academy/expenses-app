import { NotificationAdvancedView } from '../../views/NotificationAdvancedView'
import PropTypes from 'prop-types'
import { ListHOC } from 'app/components/HOCs/ListHOC'

const NotificationList = ({ collectionName }) => {
  return (
    <ListHOC collectionName={collectionName}>
      {(item) => (
        <NotificationAdvancedView
          key={item.id}
          notificationAvatar={item.avatar}
          notificationText={item.notificationText}
          notificationTime={item.notificationTime}
          verticalAlignment="center"
          horizontalAlignment="around"
          textMaxWidth="210px"
        />
      )}
    </ListHOC>
  )
}

NotificationList.propTypes = {
  collectionName: PropTypes.string.isRequired
}

export default NotificationList
