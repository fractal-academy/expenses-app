import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { addData, getCollectionRef, getTimestamp } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { CommentList } from 'domains/Comment/components/list'
import { Spinner } from 'components/Lib'
import { COLLECTIONS } from 'app/constants'

/**
 * @info CommentListWithAdd (14 Feb 2021) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CommentListWithAdd = () => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const { avatarURL, firstName, surname } = useSession()
  const [comments, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.COMMENTS)
      .where('productId', '==', id)
      .orderBy('date', 'desc'),
    { idField: 'id' }
  )

  // [COMPONENT_STATE_HOOKS]
  const inputRef = useRef()

  // [HELPER_FUNCTIONS]
  const addComment = (e) => {
    e.preventDefault()
    if (inputRef.current.value) {
      addData(COLLECTIONS.COMMENTS, {
        date: getTimestamp().now(),
        member: { avatarURL, firstName, surname },
        productId: id,
        text: inputRef.current.value
      })
      inputRef.current.value = ''
    }
  }

  // [TEMPLATE]
  return (
    <Container>
      <Row>
        <Col>
          <Box mb={2}>
            <CommentSimpleForm inputRef={inputRef} addComment={addComment} />
          </Box>
          {loading || !comments ? (
            <Spinner />
          ) : (
            <CommentList comments={comments} />
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default CommentListWithAdd
