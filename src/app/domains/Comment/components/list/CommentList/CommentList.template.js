import { ListHOC } from 'app/components'
import { CommentAdvancedView } from 'domains/Comment/components/views'

const CommentList = (props) => {
  return (
    <>
      <ListHOC collectionName="comments">
        {(item) => (
          <CommentAdvancedView
            commentTime={item.commentTime}
            name={item.name}
            surName={item.surName}
            text={item.text}
          />
        )}
      </ListHOC>
    </>
  )
}

CommentList.propTypes = {}
CommentList.defaultProps = {}

export default CommentList
