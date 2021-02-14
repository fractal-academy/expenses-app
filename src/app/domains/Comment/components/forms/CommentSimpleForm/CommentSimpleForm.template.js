import PropTypes from 'prop-types'
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { useStyles } from './CommentSimpleForm.style'

/**
 * @info CommentSimpleForm (03 Feb 2021) // CREATION DATE
 *
 * @since 14 Feb 2021 ( v.0.0.3 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CommentSimpleForm = (props) => {
  // [INTERFACES]
  const { addComment, inputRef } = props

  // [ADDITIONAL_HOOKS]
  const classes = useStyles()

  // [TEMPLATE]
  return (
    <Paper component="form" onSubmit={addComment} className={classes.root}>
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
        type="submit">
        <SendIcon color="primary" />
      </IconButton>
    </Paper>
  )
}

CommentSimpleForm.propTypes = { addComment: PropTypes.func.isRequired }

export default CommentSimpleForm
