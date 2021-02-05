import { NotificationAdvancedView } from '../../views/NotificationAdvancedView'
import PropTypes from 'prop-types'
import { ListHOC } from 'app/components/HOCs/ListHOC'

const mockNotification = [
  {
    id: 1,
    avatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    notificationText: 'notification 1',
    notificationTime: new Date()
  },
  {
    id: 2,
    avatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    notificationText:
      'notification 2 logn logn logn logn logn logn logn logn logn logn logn logn logn',
    notificationTime: new Date()
  },
  {
    id: 3,
    avatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    notificationText: 'notification 3',
    notificationTime: new Date()
  },
  {
    id: 4,
    avatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    notificationText: 'notification 4',
    notificationTime: new Date()
  }
]

//TODO delete mock data
const NotificationList = ({ collectionName }) => {
  return (
    <ListHOC collectionName={collectionName} mock={mockNotification}>
      {(item) => (
        <NotificationAdvancedView
          key={item.id}
          notificationAvatar={item.avatar}
          notificationText={item.notificationText}
          notificationTime={item.notificationTime}
          verticalAlignment="center"
          horizontalAlignment="around"
        />
      )}
    </ListHOC>
  )
}

NotificationList.propTypes = {
  collectionName: PropTypes.string.isRequired
}

export default NotificationList
