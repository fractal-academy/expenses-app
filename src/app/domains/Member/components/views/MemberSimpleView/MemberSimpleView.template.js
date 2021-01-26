import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

const MemberSimpleView = (props) => {
  return (
    <Container>
      <Row>
        <Col cw="auto" mr={3}>
          <Avatar size="sm" src={props.avatar}></Avatar>
        </Col>
        {props.withName && (
          <Col mr={2}>
            <Typography variant="h6">{props.name}</Typography>
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
MemberSimpleView.defaultProps = {}

export default MemberSimpleView
