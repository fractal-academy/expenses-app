import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import {
  useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'
import {
  addData,
  getCollectionRef,
  getTimestamp,
  getData
} from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { CommentList } from 'domains/Comment/components/list'
import { Spinner } from 'components/Lib'
import { COLLECTIONS } from 'app/constants'
import { Logger } from 'app/utils'

/**
 * @info CommentListWithAdd (14 Feb 2021) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.1 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CommentListWithAdd = () => {
  // STATE
  const [comments, setComments] = useState()

  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const session = useSession()
  const [data, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.COMMENTS)
      .where('productId', '==', id)
      .orderBy('date', 'desc'),
    { idField: 'id' }
  )
  const inputRef = useRef()

  // [FOR_LOGGER]
  const location = useLocation()
  const prodCollection =
    (location.pathname.includes(COLLECTIONS.CART) && COLLECTIONS.CART) ||
    (location.pathname.includes(COLLECTIONS.WISHES) && COLLECTIONS.WISHES) ||
    (location.pathname.includes('regular') && COLLECTIONS.REGULAR_PRODUCTS)
  const [value] = useDocumentData(getCollectionRef(prodCollection).doc(id))

  const description = `New comment for product '${value?.name}' was added on 
  ${
    prodCollection === COLLECTIONS.REGULAR_PRODUCTS
      ? 'regular products'
      : prodCollection
  } page`

  // [HELPER_FUNCTIONS]
  const addComment = (e) => {
    e.preventDefault()
    if (inputRef.current.value) {
      addData(COLLECTIONS.COMMENTS, {
        date: getTimestamp().now(),
        userId: session.id,
        productId: id,
        text: inputRef.current.value
      })
      inputRef.current.value = ''
      Logger('Add new comment', description, session)
    }
  }

  // [USE_EFFECTS]
  useEffect(() => {
    if (!loading) {
      const fetchUser = async (comment) => {
        const { userId, ...restComment } = comment
        const user = await getData(COLLECTIONS.USERS, userId)

        return {
          ...restComment,
          member: {
            avatarURL: user.avatarURL,
            firstName: user.firstName,
            surname: user.surname
          }
        }
      }

      const getComments = async () => {
        return Promise.all(data.map(fetchUser))
      }
      getComments().then((res) => {
        setComments(res)
      })
    }
  }, [data, loading])

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
