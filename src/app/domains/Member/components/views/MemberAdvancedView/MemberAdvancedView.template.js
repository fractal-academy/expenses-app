import { Fragment } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { Avatar } from 'components'
import PropTypes from 'prop-types'

const MemberAdvancedView = (props) => {
  return (
    <Box className="container-fluid">
      <Box className="row">
        <Box
          className={props.horizontal ? 'col-auto' : 'col-12'}
          mb={!props.horizontal && 1}
          display="flex"
          justifyContent="center"
          alignItems={props.horizontal && 'center'}>
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
            {!props.horizontal && (
              <Box className="col-12">
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </Box>
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
