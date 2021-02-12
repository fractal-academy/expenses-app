import { ListHOC } from 'app/components/HOCs/ListHOC/index'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { useEffect, useRef, useState } from 'react'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { useCollection } from 'react-firebase-hooks/firestore'
import { addData, getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { useSession } from 'app/context/SessionContext/hooks'

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
  const [comments, setComments] = useState([])
  const inputRef = useRef()
  const session = useSession()

  const productId = window.location.hash.substring(1)

  const [value, loading, error] = useCollection(
    getCollectionRef(COLLECTIONS.COMMENTS).where('productId', '==', productId)
  )

  useEffect(() => {
    const recievedData = value?.docs.map((item) => item.data())
    setComments(recievedData)
  }, [value])

  const addComment = (e) => {
    addData(COLLECTIONS.COMMENTS, {
      date: new Date().getTime(),
      firstName: session.firstName,
      surname: session.surname,
      productId: productId,
      text: inputRef.current.value
    })
    e.preventDefault()
    inputRef.current.value = ''
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
                name={item.firstName}
                surName={item.surname}
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
