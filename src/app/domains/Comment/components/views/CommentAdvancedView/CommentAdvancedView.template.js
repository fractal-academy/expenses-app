import { useStyles } from './CommentAdvancedView.style'
import { List, ListItem, MenuItem, Paper, Typography } from '@material-ui/core'
import { Box, Row, Col, Container } from '@qonsoll/react-design'
import { AccountCircle } from '@material-ui/icons'
import moment from 'moment'

const CommentAdvancedView = (props) => {
  const { commentTime } = props
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
                      <Typography variant={'body1'}>Olena Shevchuk</Typography>
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
                  <Typography variant={'body2'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis dolore doloremque, doloribus ea eaque earum
                    eveniet in iste iusto laudantium
                  </Typography>
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
