import { Avatar } from 'components/Lib'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Row, Col } from '@qonsoll/react-design'

const MemberSimpleView = (props) => {
  const { avatarURL, withName, name } = props

  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar size="xs" src={avatarURL} />
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
  avatarUrl: PropTypes.string,
  name: PropTypes.string
}

export default MemberSimpleView
