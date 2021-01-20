import { Fragment } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Avatar } from 'components'
import PropTypes from 'prop-types'

const MemberAdvancedView = (props) => {
  return (
    <Box className="container-fluid">
      <Box className="row">
        <Box
          className={props.horizontal ? 'col-auto' : 'col-12'}
          mb={1}
          display="flex"
          justifyContent="center">
          <Avatar size={props.horizontal ? 'sm' : 'lg'}>TT</Avatar>
        </Box>
        <Box className="col" textAlign={props.horizontal ? 'left' : 'center'}>
          <Box className="row">
            <Box className="col-12">
              <Typography variant="subtitle1">
                {props.name} {props.surname}
              </Typography>
            </Box>
            <Box className="col-12">
              <Typography variant="body2" color="textSecondary">
                {props.role}
              </Typography>
            </Box>
            {!props.horizontal && (
              <Fragment>
                <Box className="col-12">
                  <Typography variant="body2">{props.email}</Typography>
                </Box>
                {props.phone && (
                  <Box className="col-12">
                    <Typography variant="body2">{props.phone}</Typography>
                  </Box>
                )}
                {props.birthday && (
                  <Box className="col-12">
                    <Typography variant="body2">{props.birthday}</Typography>
                  </Box>
                )}
              </Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

MemberAdvancedView.propTypes = {
  horizontal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.string
}
MemberAdvancedView.defaultProps = {}

export default MemberAdvancedView
