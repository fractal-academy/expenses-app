import { Avatar } from 'components/Lib'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const SIZE_AVATAR = ['xs', 'sm', 'md', 'lg']

const MemberSimpleView = (props) => {
  const { avatarURL, withName, name, avatarSize = 'xs' } = props

  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar size={avatarSize} src={avatarURL}>
          <AccountCircleIcon />
        </Avatar>
      </Col>
      {withName && (
        <Col px={0}>
          <Typography>{name}</Typography>
        </Col>
      )}
    </Row>
  )
}

MemberSimpleView.propTypes = {
  withName: PropTypes.bool,
  avatarURL: PropTypes.string,
  avatarSize: PropTypes.oneOf(SIZE_AVATAR),
  name: PropTypes.string
}

export default MemberSimpleView
