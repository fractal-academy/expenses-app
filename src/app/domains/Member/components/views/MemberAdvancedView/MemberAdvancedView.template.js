import PropTypes from 'prop-types'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { Typography, IconButton, Chip } from '@material-ui/core'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { RoleSimpleView } from 'domains/Role/components/views'
import { Avatar, Dropdown } from 'components/Lib'
import { ROUTES_PATHS } from 'app/constants'
import {
  MoreHorizOutlined,
  CreateRounded,
  HourglassEmpty
} from '@material-ui/icons'

/**
 * @info MemberAdvancedView (18 Jan 2021) // CREATION DATE
 *
 * @since 13 Feb 2021 ( v.0.0.6 ) // LAST-EDIT DATE
 *
 * @return {ReactComponent}
 */

const MemberAdvancedView = (props) => {
  // [INTERFACES]
  const { profile, DropdownList } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [COMPUTED_PROPERTIES]
  const EDIT_PATH = `${ROUTES_PATHS.MEMBERS_ALL}/${props.id}/edit`
  const HORIZONTAL_DISPLAY_NAME =
    props.horizontal && props.isPending
      ? props.email
      : `${props.firstName} ${props.surname}`

  // [TEMPLATE]
  return (
    <Container pl={2} pr={2}>
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
                {profile ? (
                  <IconButton
                    onClick={() => props.id && history.push(EDIT_PATH)}>
                    <CreateRounded />
                  </IconButton>
                ) : (
                  <Dropdown overlay={DropdownList}>
                    <IconButton color="primary">
                      <MoreHorizOutlined />
                    </IconButton>
                  </Dropdown>
                )}
              </Col>
            ) : (
              <Col>
                <Typography>{HORIZONTAL_DISPLAY_NAME}</Typography>
                <RoleSimpleView
                  variant="caption"
                  color="textSecondary"
                  align="center"
                  role={props.role}
                />
                {props.isPending && (
                  <Box mx={2} display="inline-block">
                    <Chip
                      size="small"
                      label="Pending"
                      icon={<HourglassEmpty />}
                    />
                  </Box>
                )}
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
  firstName: PropTypes.string,
  surname: PropTypes.string,
  role: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default MemberAdvancedView
