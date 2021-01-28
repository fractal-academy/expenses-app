import { ListHOC } from 'app/components/HOCs/ListHOC'
import { LogAdvancedView } from '../../views/LogAdvancedView'

const LogList = () => {
  return (
    <ListHOC collectionName="logs">
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
