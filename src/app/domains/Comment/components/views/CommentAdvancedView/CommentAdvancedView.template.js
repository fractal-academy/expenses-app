import PropTypes from 'prop-types'
import moment from 'moment'
import { Paper, Typography } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import { MemberSimpleView } from 'domains/Member/components/views'
import { useStyles } from './CommentAdvancedView.style'
import { useEffect, useState } from 'react'

/**
 * @info CommentAdvancedView (18 Jan 2021) // CREATION DATE
 *
 * @since 13 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const CommentAdvancedView = (props) => {
  // [INTERFACES]
  const { commentTime, member, text } = props
  const { firstName, surname, avatarURL } = member

  // [ADDITIONAL_HOOKS]
  const classes = useStyles()

  // [COMPONENT_STATE_HOOKS]
  const [commentsDate, setCommentsDate] = useState(
    moment(commentTime).fromNow()
  )
  // [USE_EFFECTS]
  useEffect(() => {
    const updateTime = () => setCommentsDate(moment(commentTime).fromNow())

    //live comment date update
    const timer = setInterval(updateTime, 30000)

    return () => clearInterval(timer)
  }, [])

  // [TEMPLATE]
  return (
    <Paper elevation={1} className={classes.itemList}>
      <Row mb={1} pt={2} h="between">
        <Col cw="auto">
          <MemberSimpleView
            avatarURL={avatarURL}
            name={`${firstName} ${surname}`}
            withName
          />
        </Col>
        <Col cw="auto">
          <Typography variant={'subtitle2'}>{commentsDate}</Typography>
        </Col>
      </Row>
      <Row>
        <Col px={2} pb={2}>
          <Typography className={classes.limitWidth} variant={'body2'}>
            {text}
          </Typography>
        </Col>
      </Row>
    </Paper>
  )
}

CommentAdvancedView.propTypes = {
  commentTime: PropTypes.instanceOf(Date),
  member: PropTypes.shape({
    avatarURL: PropTypes.string,
    firstName: PropTypes.string,
    surname: PropTypes.string
  }).isRequired,
  text: PropTypes.string.isRequired
}

export default CommentAdvancedView
