import { Row, Col, Box } from '@qonsoll/react-design'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Typography, Avatar } from '@material-ui/core'
import moment from 'moment'
import { useState } from 'react'

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
    <Box borderWidth="1px" borderStyle="solid">
      <Row v="center">
        <Col cw="10">
          <Row v="center" onClick={() => setDetailed(!detailed)}>
            <Col cw="2">
              <Box hoverColor="#3b5998">
                {detailed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </Box>
            </Col>
            <Col>
              <Typography>{action}</Typography>
            </Col>
          </Row>
        </Col>
        <Col>
          <Avatar alt="User" src={userAvatar}>
            {/** Change this block to UserSimpleView when this component will be ready */}
            <AccountCircleIcon />
          </Avatar>
        </Col>
      </Row>
      {detailed && (
        <Row>
          <Col>
            <Row h="center">
              <Typography>
                {moment(actionDateTime).format('H:m, D.M.YYYY')}
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
  )
}

LogAdvancedView.propTypes = {}

export default LogAdvancedView
