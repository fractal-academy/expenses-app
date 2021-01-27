import { NotificationAdvancedView } from '../../views/NotificationAdvancedView'
import PropTypes from 'prop-types'
import { ListWithDataFromCollection } from '../../../../../components/ListHOC'

const NotificationList = ({ collectionName }) => {
  return (
    <ListWithDataFromCollection collectionName={collectionName}>
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
    </ListWithDataFromCollection>
  )
}

NotificationList.propTypes = {
  collectionName: PropTypes.string.isRequired
}

export default NotificationList
