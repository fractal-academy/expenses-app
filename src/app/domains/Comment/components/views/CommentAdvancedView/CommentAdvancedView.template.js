import { useStyles } from './CommentAdvancedView.style'
import { List, ListItem, MenuItem, Paper, Typography } from '@material-ui/core'
import { Box, Row, Col, Container } from '@qonsoll/react-design'
import { AccountCircle } from '@material-ui/icons'
import moment from 'moment'

const CommentAdvancedView = (props) => {
  const { commentTime, authorID, avatar, name, surName, text } = props
  const classes = useStyles()

  return (
    <Container>
      <Row>
        <Col>
          <Paper elevation={1}>
            <Box p={2} mb={1}>
              <Row mb={2} h="between">
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
                <Col>
                  <Box>
                    <Typography
                      className={classes.limitWidth}
                      variant={'body2'}>
                      {text}
                    </Typography>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Paper>
        </Col>
      </Row>
    </Container>
  )
}

CommentAdvancedView.propTypes = {}
CommentAdvancedView.defaultProps = {}

export default CommentAdvancedView
