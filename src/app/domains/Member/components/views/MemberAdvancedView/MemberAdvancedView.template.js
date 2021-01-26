import { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core'
import { Avatar } from 'components'
import PropTypes from 'prop-types'
import { RoleSimpleView } from '../../../../Role/components/views'
import { Container, Row, Col } from '@qonsoll/react-design'

const MemberAdvancedView = (props) => {
  return (
    <Container>
      <Row h="center">
        <Row>
          <Col h="center" v="center" mr={props.horizontal && 3}>
            <Avatar size={props.horizontal ? 'sm' : 'lg'} />
          </Col>
        </Row>

        <Col cw={props.horizontal ? 'auto' : 12}>
          <Row h={props.horizontal ? 'left' : 'center'}>
            <Col cw="auto">
              <Typography variant="h6">
                {props.name} {props.surname}
              </Typography>
            </Col>
          </Row>
          <Row
            h={props.horizontal ? 'left' : 'center'}
            mb={!props.horizontal && 2}>
            <Col cw="auto">
              <RoleSimpleView role={props.role} />
            </Col>
          </Row>
          {!props.horizontal && (
            <>
              <Row h="center" mb={1}>
                <Col cw="auto">
                  <Typography variant="body2">{props.email}</Typography>
                </Col>
              </Row>
              <Row h="center" mb={1}>
                <Col cw="auto">
                  <Typography variant="body2">{props.phone}</Typography>
                </Col>
              </Row>
              {props.birthday && (
                <Row h="center" mb={2}>
                  <Col cw="auto">
                    <Typography variant="body2">{props.birthday}</Typography>
                  </Col>
                </Row>
              )}
              <Row h="center">
                <Col cw="auto">
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

MemberAdvancedView.propTypes = {
  horizontal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.string
}
MemberAdvancedView.defaultProps = {}

export default MemberAdvancedView
