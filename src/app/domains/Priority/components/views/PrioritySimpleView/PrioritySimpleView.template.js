import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import { PRIORITY } from 'app/constants'

const { PRIORITY_VALUE } = PRIORITY

const PrioritySimpleView = (props) => {
  const { priority } = props //use props for view priority product

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1">Priority</Typography>
      <Typography variant="body1">{priority}</Typography>
    </Box>
  )
}

PrioritySimpleView.propTypes = {
  priority: PropTypes.oneOf(PRIORITY_VALUE)
}
PrioritySimpleView.defaultProps = {
  priority: 'Medium'
}

export default PrioritySimpleView
