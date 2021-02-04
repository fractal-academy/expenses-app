import { useStyles } from './CommentAdvancedView.style'
import { Paper, Typography } from '@material-ui/core'
import { Box, Row, Col, Container } from '@qonsoll/react-design'
import { AccountCircle } from '@material-ui/icons'
import moment from 'moment'
import PropTypes from 'prop-types'

const CommentAdvancedView = (props) => {
  const { commentTime, authorID, avatar, name, surName, text } = props
  const classes = useStyles()

  return (
    <Container>
      <Row mb={1}>
        <Col>
          <Paper elevation={1}>
            <Row mb={1} pt={2} h="between">
              {/*when MemberSimpleView will be approved - insert it here instead of 2 collumns*/}
              <Col cw="auto">
                <Row>
                  <Col cw="auto">
                    <AccountCircle />
                  </Col>
                  <Col cw="auto">
                    <Typography variant={'body1'}>
                      {name} {surName}
                    </Typography>
                  </Col>
                </Row>
              </Col>
              {/*when MemberSimpleView will be approved - insert it here instead of 2 collumns*/}
              <Col cw="auto">
                <Typography variant={'subtitle2'}>
                  {moment(commentTime).fromNow()}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col px={2} pb={2}>
                <Typography className={classes.limitWidth} variant={'body2'}>
                  {text}
                </Typography>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
  )
}

CommentAdvancedView.propTypes = {
  commentTime: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentAdvancedView
