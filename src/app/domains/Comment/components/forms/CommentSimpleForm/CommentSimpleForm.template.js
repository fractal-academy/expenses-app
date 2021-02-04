import { Col, Container, Row } from '@qonsoll/react-design'
import { useStyles } from './CommentSimpleForm.style'
import SendIcon from '@material-ui/icons/Send'
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'

const CommentSimpleForm = (props) => {
  const { addComment, inputRef } = props
  const classes = useStyles()

  return (
    <Container>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  )
}

CommentSimpleForm.propTypes = { addComment: PropTypes.func.isRequired }

export default CommentSimpleForm
