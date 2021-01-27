import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

const MemberSimpleView = (props) => {
  const { avatarUrl, withName, name } = props
  return (
    <Container>
      <Row>
        <Col cw="auto" mr={3}>
          <Avatar size="sm" src={avatarUrl} />
        </Col>
        {withName && (
          <Col mr={2}>
            <Typography variant="h6">{name}</Typography>
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
