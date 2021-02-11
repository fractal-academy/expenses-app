import PropTypes from 'prop-types'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { Typography, IconButton } from '@material-ui/core'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { RoleSimpleView } from 'domains/Role/components/views'
import { Avatar } from 'components/Lib'
import { ROUTES_PATHS } from 'app/constants'

const MemberAdvancedView = (props) => {
  const history = useHistory()
  return (
    <Container>
      <Row noGutters>
        <Col>
          <Row mb={!props.horizontal && '3'}>
            <Col cw={props.horizontal && 'auto'}>
              <Row noGutters>
                <Box
                  border={!props.horizontal && '3px solid white'}
                  borderRadius="xxl">
                  <Avatar
                    size={props.horizontal ? 'sm' : 'lg'}
                    src={props.avatarURL}
                  />
                </Box>
              </Row>
            </Col>
            {!props.horizontal ? (
              <Col cw={2} v="flex-end">
                <IconButton
                  onClick={() =>
                    history.push(`${ROUTES_PATHS.MEMBERS_ALL}/${props.id}/edit`)
                  }>
                  <CreateRoundedIcon />
                </IconButton>
              </Col>
            ) : (
              <Col>
                <Typography>
                  {props.firstName} {props.surname}
                </Typography>
                <RoleSimpleView
                  variant="caption"
                  color="textSecondary"
                  align="center"
                  role={props.role}
                />
              </Col>
            )}
          </Row>
          {!props.horizontal && (
            <>
              <Row mb={4}>
                <Col cw="auto">
                  <Typography variant="h5">
                    {props.firstName} {props.surname}
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
              {props.phone && (
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
              )}
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
  firstName: PropTypes.string.isRequired,
  surname: PropTypes.string,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default MemberAdvancedView
