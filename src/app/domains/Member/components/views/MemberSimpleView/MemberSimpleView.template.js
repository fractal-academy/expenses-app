import { Avatar } from 'components/Lib'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

const MemberSimpleView = (props) => {
  const { avatarUrl, withName, name } = props
  return (
    <Container>
      <Row v="center">
        <Col cw="auto">
          <Avatar size="sm" src={avatarUrl} />
        </Col>
        {withName && (
          <Col>
            <Typography>{name}</Typography>
          </Col>
        )}
      </Row>
    </Container>
  )
}

MemberSimpleView.propTypes = {
  withName: PropTypes.bool,
  avatarUrl: PropTypes.string,
  name: PropTypes.string
}

export default MemberSimpleView
