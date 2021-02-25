import List from '@material-ui/core/List'
import { LogAdvancedView } from 'domains/Log/components/views'
import { Col, Row } from '@qonsoll/react-design'

const LogList = (props) => {
  // INTERFACES
  const { logs } = props

  // TEMPLATE
  return (
    <List>
      {logs.map((item, index) => (
        <Row>
          <Col>
            <LogAdvancedView
              key={index}
              action={item.action}
              userAvatar={item.userAvatar}
              actionDateTime={item.dateTime}
              userMail={item.userMail}
              actionDescription={item.description}
            />
          </Col>
        </Row>
      ))}
    </List>
  )
}

export default LogList
