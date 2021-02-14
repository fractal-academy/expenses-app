import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import { CommentAdvancedView } from 'domains/Comment/components/views'

/**
 * @info CommentList (28 Jan 2021) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CommentList = (props) => {
  // [INTERFACES]
  const { comments } = props

  // [TEMPLATE]
  return (
    <List>
      {comments.map((item) => (
        <CommentAdvancedView
          commentTime={item.date.toDate()}
          member={item.member}
          text={item.text}
          key={item.id}
        />
      ))}
    </List>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CommentList
