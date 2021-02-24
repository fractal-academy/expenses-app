import { Row, Col, Box, Container } from '@qonsoll/react-design'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
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
    <Container mb={2}>
      <Paper>
        <Box p={2}>
          <Row v="center">
            <Col cw="auto">
              <Avatar alt="User" src={userAvatar} />
            </Col>
            <Col>
              <Typography>{action}</Typography>
            </Col>
            <Col cw="auto">
              <Typography variant="body2">
                {moment(formatedDate).format('H:mm, DD.MM.YYYY')}
              </Typography>
            </Col>
            <Col cw="auto" onClick={() => setDetailed(!detailed)}>
              <Box>
                {detailed ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </Box>
            </Col>
          </Row>
          {detailed && (
            <Row>
              <Col>
                <Row h="right">
                  <Col cw="auto">
                    <Typography variant="caption" color="textSecondary">
                      {userMail}
                    </Typography>
                  </Col>
                </Row>
                <Row h="center">
                  <Col>
                    <Box pl={4}>
                      <Typography variant="body1">
                        {actionDescription}
                      </Typography>
                    </Box>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </Box>
      </Paper>
    </Container>
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
