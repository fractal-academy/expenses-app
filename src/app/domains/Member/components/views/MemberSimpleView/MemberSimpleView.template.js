import { Box } from '@material-ui/core'
import { Avatar } from 'components'
import PropTypes from 'prop-types'

const MemberSimpleView = (props) => {
  return (
    <Box className="container-fluid">
      <Box className="row" alignItems="center">
        <Box className="col-auto">
          <Avatar size="sm" src={props.avatar}></Avatar>
        </Box>
        {props.withName && <Box className="col">{props.name}</Box>}
      </Box>
    </Box>
  )
}

MemberSimpleView.propTypes = {
  withName: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string
}
MemberSimpleView.defaultProps = {}

export default MemberSimpleView
