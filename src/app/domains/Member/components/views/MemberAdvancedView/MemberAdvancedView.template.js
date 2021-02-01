import { Typography, Button, IconButton } from '@material-ui/core'
import { Avatar } from 'components/Lib'
import PropTypes from 'prop-types'
import { RoleSimpleView } from 'domains/Role/components/views'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import moment from 'moment'

const MemberAdvancedView = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row mb={3}>
            <Col>
              <Row>
                <Box
                  border={!props.horizontal && '3px solid white'}
                  borderRadius="xxl">
                  <Avatar
                    size={props.horizontal ? 'sm' : 'lg'}
                    src={props.avatarUrl}
                  />
                </Box>
              </Row>
            </Col>
            <Col cw={2} v="flex-end">
              <IconButton>
                <CreateRoundedIcon />
              </IconButton>
            </Col>
          </Row>
          <Row mb={4}>
            <Col cw="auto">
              <Typography variant="h5">
                {props.name} {props.surname}
              </Typography>
            </Col>
            <Col v="center">
              <Typography variant="button" color="textSecondary" align="center">
                {props.role}
              </Typography>
            </Col>
          </Row>
          <Row mb={3}>
            <Col>
              <Row>
                <Typography variant="caption" color="textSecondary">
                  E-mail
                </Typography>
              </Row>
              <Row>
                <Typography variant="h6">{props.email}</Typography>
              </Row>
            </Col>
          </Row>
          <Row mb={3}>
            <Col>
              <Row>
                <Typography variant="caption" color="textSecondary">
                  Phone
                </Typography>
              </Row>
              <Row>
                <Typography variant="h6">{props.phone}</Typography>
              </Row>
            </Col>
          </Row>
          {props.birthday && (
            <Row mb={3}>
              <Col>
                <Row>
                  <Typography variant="caption" color="textSecondary">
                    Date of birth
                  </Typography>
                </Row>
                <Row>
                  <Typography variant="h6">
                    {moment(props.birthday).format('DD/MM/YYYY')}
                  </Typography>
                </Row>
              </Col>
            </Row>
          )}
          {/* <Row h="center">
            <Col cw="auto">
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Col>
          </Row> */}
        </Col>
      </Row>
      {/* <Row>
        <Row>
          <Col
            h="center"
            v="center"
            mr={props.horizontal && 3}
            mb={!props.horizontal && 3}>
            <Box
              border={!props.horizontal && '3px solid white'}
              borderRadius="xxl">
              <Avatar
                size={props.horizontal ? 'sm' : 'lg'}
                src={props.avatarUrl}
              />
            </Box>
          </Col>
        </Row>
        <Col cw={props.horizontal ? 'auto' : 12}>
          <Row h="left">
            <Col cw="auto">
              <Typography variant="h5">
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
                    <Typography variant="body2">
                      {moment(props.birthday).format('DD/MM/YYYY')}
                    </Typography>
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
      </Row> */}
    </Container>
  )
}

MemberAdvancedView.propTypes = {
  horizontal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.string
}
export default MemberAdvancedView
