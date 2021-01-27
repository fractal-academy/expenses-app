import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { PRIORITY } from 'app/constants'
import { Row } from '@qonsoll/react-design'

const { PRIORITY_VALUE } = PRIORITY

const PrioritySimpleView = (props) => {
  const { priority } = props //use props for view priority product

  return (
    <Row h="between">
      <Typography variant="body1">Priority</Typography>
      <Typography variant="body1">{priority}</Typography>
    </Row>
  )
}

PrioritySimpleView.propTypes = {
  priority: PropTypes.oneOf(PRIORITY_VALUE)
}
PrioritySimpleView.defaultProps = {
  priority: 'Medium'
}

export default PrioritySimpleView
