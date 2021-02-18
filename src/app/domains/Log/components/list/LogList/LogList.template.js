import List from '@material-ui/core/List'
import { LogAdvancedView } from '../../views/LogAdvancedView'

const LogList = (props) => {
  // INTERFACES
  const { logs } = props

  // TEMPLATE
  return (
    <List>
      {logs.map((item, index) => (
        <LogAdvancedView
          key={index}
          action={item.action}
          userAvatar={item.userAvatar}
          actionDateTime={item.dateTime}
          userMail={item.userMail}
          actionDescription={item.description}
        />
      ))}
    </List>
  )
}

export default LogList
