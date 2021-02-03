import { ListHOC } from 'app/components/HOCs/ListHOC/index'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { useStyles } from './CommentSimpleForm.style'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import { Paper } from '@material-ui/core'

const CommentSimpleForm = (props) => {
  const { addComment, inputRef } = props
  const classes = useStyles()

  return (
    <Container>
      <Row>
        <Col>
          <Box mt={2} mb={2}>
            <Paper
              component="form"
              onSubmit={addComment}
              className={classes.root}>
              <InputBase
                inputRef={inputRef}
                className={classes.input}
                placeholder="Write a comment..."
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                className={classes.SendIcon}
                aria-label="send"
                color="secondary"
                onClick={addComment}>
                <SendIcon color="primary" />
              </IconButton>
            </Paper>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

CommentSimpleForm.propTypes = {}
CommentSimpleForm.defaultProps = {}

export default CommentSimpleForm
