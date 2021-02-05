import { Row, Col, Box } from '@qonsoll/react-design'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Typography, Avatar, Divider } from '@material-ui/core'
import moment from 'moment'
import { useState } from 'react'
import PropTypes from 'prop-types'

const LogAdvancedView = (props) => {
  const {
    action,
    userAvatar,
    actionDateTime,
    userMail,
    actionDescription
  } = props

  const [detailed, setDetailed] = useState(false)
  return (
    <>
      <Box p={2}>
        <Row v="center" h="between">
          <Col>
            <Row v="center">
              <Col cw="auto">
                <Avatar alt="User" src={userAvatar}>
                  {/** Change this block to UserSimpleView when it will be ready */}
                  <AccountCircleIcon />
                </Avatar>
              </Col>
              <Col>
                <Typography>{action}</Typography>
              </Col>
            </Row>
          </Col>
          <Col cw="auto" onClick={() => setDetailed(!detailed)}>
            <Box hoverColor="#3b5998">
              {detailed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
          </Col>
        </Row>
        {detailed && (
          <Row>
            <Col>
              <Row h="center">
                <Typography>
                  {moment(actionDateTime).format('H:mm, DD.MM.YYYY')}
                </Typography>
              </Row>
              <Row h="center">
                <Typography>{userMail}</Typography>
              </Row>
              <Row h="center">
                <Typography>{actionDescription}</Typography>
              </Row>
            </Col>
          </Row>
        )}
      </Box>
      <Divider />
    </>
  )
}

LogAdvancedView.propTypes = {
  action: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  actionDateTime: PropTypes.number.isRequired,
  userMail: PropTypes.string.isRequired,
  actionDescription: PropTypes.string.isRequired
}

export default LogAdvancedView
