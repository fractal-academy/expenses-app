import { ListHOC } from 'app/components/HOCs/ListHOC/index'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { useRef, useState } from 'react'
import { CommentSimpleForm } from 'domains/Comment/components/forms/CommentSimpleForm'

const tmpData = [
  {
    commentTime: new Date().getTime(),
    name: 'Sasha',
    surName: 'Golyk',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorem.'
  }
]

/*
 * List with simple form, isn't it a combine component???
 *
 * TODO refactor
 * */

const CommentList = (props) => {
  const [comments, setComments] = useState(tmpData)
  const inputRef = useRef()

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
      <Row noGutters>
        <Col>
          <Box mt={2} mb={2}>
            <CommentSimpleForm inputRef={inputRef} addComment={addComment} />
          </Box>
          <ListHOC mock={comments}>
            {(item, index) => (
              <CommentAdvancedView
                commentTime={item.commentTime}
                name={item.name}
                surName={item.surName}
                text={item.text}
                key={index}
              />
            )}
          </ListHOC>
        </Col>
      </Row>
    </Container>
  )
}

CommentList.propTypes = {}

export default CommentList
