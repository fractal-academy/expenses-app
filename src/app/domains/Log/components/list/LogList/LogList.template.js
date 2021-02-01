import { ListHOC } from 'app/components/HOCs/ListHOC'
import { LogAdvancedView } from '../../views/LogAdvancedView'

const mockLog = [
  {
    action: 'delete',
    userAvatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    userMail: 'maxim.makarov@gmail.com',
    description: 'notification 1',
    dateTime: new Date()
  },
  {
    action: 'create',
    userAvatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    userMail: 'asdfe@gmail.com',
    description: 'notasd atataattattataa1',
    dateTime: new Date()
  },
  {
    action: 'edit',
    userAvatar: 'https://w3schoolsrus.github.io/w3images/avatar2.png',
    userMail: 'maxim.asdfe@gmail.com',
    description: 'notification 1',
    dateTime: new Date()
  }
]
//TODO delete mock data
const LogList = () => {
  return (
    <ListHOC collectionName="logs" mock={mockLog}>
      {(item) => (
        <LogAdvancedView
          action={item.action}
          userAvatar={item.userAvatar}
          actionDateTime={item.dateTime}
          userMail={item.userMail}
          actionDescription={item.description}
        />
      )}
    </ListHOC>
  )
}

export default LogList
