import { ListHOC } from 'app/components'

const CommentList = (props) => {
  return (
    <>
      <ListHOC collectionName="comments"></ListHOC>
    </>
  )
}

CommentList.propTypes = {}
CommentList.defaultProps = {}

export default CommentList
