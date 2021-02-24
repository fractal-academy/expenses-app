import { Row, Col, Box } from '@qonsoll/react-design'
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  AccountCircle
} from '@material-ui/icons'
import { Typography, Avatar, Paper } from '@material-ui/core'
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

  const formatedDate = actionDateTime.toDate()

  const [detailed, setDetailed] = useState(false)
  return (
    <Paper>
      <Box p={2}>
        <Row v="center" h="between">
          <Col>
            <Row v="center">
              <Col cw="auto">
                <Avatar alt="User" src={userAvatar}>
                  {/** Change this block to UserSimpleView when it will be ready */}
                  <AccountCircle />
                </Avatar>
              </Col>
              <Col>
                <Typography>{action}</Typography>
              </Col>
              <Col cw="auto">
                <Typography>
                  {moment(formatedDate).format('H:mm, DD.MM.YYYY')}
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col cw="auto" onClick={() => setDetailed(!detailed)}>
            <Box>{detailed ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Box>
          </Col>
        </Row>
        {detailed && (
          <Row>
            <Col>
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
    </Paper>
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
