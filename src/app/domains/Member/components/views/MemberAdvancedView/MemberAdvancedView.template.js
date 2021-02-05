import { Typography, Button, IconButton } from '@material-ui/core'
import { Avatar } from 'components/Lib'
import PropTypes from 'prop-types'
import { RoleSimpleView } from 'domains/Role/components/views'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import moment from 'moment'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'

const MemberAdvancedView = (props) => {
  const history = useHistory()
  return (
    <Container>
      <Row>
        <Col>
          <Row mb={!props.horizontal && '3'}>
            <Col cw={props.horizontal && '2'}>
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
            {!props.horizontal ? (
              <Col cw={2} v="flex-end">
                <IconButton>
                  <CreateRoundedIcon
                    onClick={() => history.push(ROUTES_PATHS.MEMBER_EDIT)}
                  />
                </IconButton>
              </Col>
            ) : (
              <Col cw={10}>
                <Typography>
                  {props.name} {props.surname}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  align="center">
                  {props.role}
                </Typography>
              </Col>
            )}
          </Row>
          {!props.horizontal && (
            <>
              <Row mb={4}>
                <Col cw="auto">
                  <Typography variant="h5">
                    {props.name} {props.surname}
                  </Typography>
                </Col>
                <Col v="center">
                  <Typography
                    variant="button"
                    color="textSecondary"
                    align="center">
                    {props.role}
                  </Typography>
                </Col>
              </Row>

              <Row mb={3}>
                <Col>
                  <Row>
                    <Typography variant="body2" color="textSecondary">
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
                    <Typography variant="body2" color="textSecondary">
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
                      <Typography variant="body2" color="textSecondary">
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
  surname: PropTypes.string,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.string
}
export default MemberAdvancedView
