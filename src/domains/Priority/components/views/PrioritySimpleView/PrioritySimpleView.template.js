import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'

const PrioritySimpleView = (props) => {
  const { priority } = props //use props for view priority product

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1">Priority</Typography>
      <Typography variant="body1">{priority}</Typography>
    </Box>
  )
}

PrioritySimpleView.defaultProps = {
  priority: 'Medium'
}

export default PrioritySimpleView
