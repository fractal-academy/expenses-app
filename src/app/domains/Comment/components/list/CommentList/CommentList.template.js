import { ListHOC } from 'app/components/HOCs/ListHOC/index'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { useStyles } from './CommentList.style'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import { useEffect, useRef, useState } from 'react'
import { Paper } from '@material-ui/core'

const tmpData = [
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  },
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem lorem lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem inpun lorem ' +
      'inpun lorem inpun lorem inpun '
  }
]

const CommentList = (props) => {
  const [comments, setComments] = useState(tmpData)
  const inputRef = useRef()

  const classes = useStyles()

  const addComment = (e) => {
    if (inputRef.current.value) {
      const commentsList = [
        {
          commentTime: new Date().getTime(),
          name: 'Aleksandr',
          surName: 'Golyk',
          text: inputRef.current.value
        },
        ...comments
      ]
      inputRef.current.value = ''
      setComments(commentsList)
      e.preventDefault()
    }
  }

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
                color="inherit"
                onClick={addComment}>
                <SendIcon color="primary" />
              </IconButton>
            </Paper>
          </Box>
          {ListHOC &&
            comments.map((item) => (
              <CommentAdvancedView
                commentTime={item.commentTime}
                name={item.name}
                surName={item.surName}
                text={item.text}
              />
            ))}
        </Col>
      </Row>
    </Container>
  )
}

CommentList.propTypes = {}
CommentList.defaultProps = {}

export default CommentList
