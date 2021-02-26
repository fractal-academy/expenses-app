import List from '@material-ui/core/List'
import { LogAdvancedView } from 'domains/Log/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { InfiniteScroll } from 'components/HOCs/InfiniteScroll'
import { useMessageDispatch, types } from 'app/context/MessageContext'

import { COLLECTIONS } from 'app/constants'

const LogList = () => {
  // [ADDITIONAL_HOOKS]
  const messageDispatch = useMessageDispatch()

  // [HELPER_FUNCTIONS]
  const onReachEndOfList = () =>
    messageDispatch({
      type: types.OPEN_WARNING_MESSAGE,
      payload: 'That all.'
    })

  // [TEMPLATE]
  return (
    <InfiniteScroll
      as={List}
      collectionName={COLLECTIONS.LOGS}
      idField="id"
      limit={20}
      order={{ field: 'dateTime', type: 'desc' }}
      onReachEnd={onReachEndOfList}>
      {(item) => (
        <Row>
          <Col>
            <LogAdvancedView
              key={item.id}
              action={item.action}
              userAvatar={item.userAvatar}
              actionDateTime={item.dateTime}
              userMail={item.userMail}
              actionDescription={item.description}
            />
          </Col>
        </Row>
      )}
    </InfiniteScroll>
  )
}

export default LogList
