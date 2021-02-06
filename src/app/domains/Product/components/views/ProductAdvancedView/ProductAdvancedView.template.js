import moment from 'moment'
import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ProgressBar, Dropdown, DropdownItem } from 'components/Lib'
import { MeasureSimpleView } from 'app/domains/Measure/components/views/MeasureSimpleView'
import { CommentList } from 'app/domains/Comment/components/list/CommentList'
import { CategorySimpleView } from 'app/domains/Category/components/views/CategorySimpleView'
import { CurrencySimpleView } from 'app/domains/Currency/components/views/CurrencySimpleView'

const config = {
  [ROUTES_PATHS.CART_SHOW]: { item: 'Buy', editRoute: ROUTES_PATHS.CART_EDIT },
  [ROUTES_PATHS.WISHES_SHOW]: {
    item: 'Approve',
    editRoute: ROUTES_PATHS.WISHES_EDIT
  },

  [ROUTES_PATHS.REGULAR_PRODUCT_SHOW]: {
    item: 'Get QR',
    editRoute: ROUTES_PATHS.REGULAR_PRODUCT_EDIT
  }
}

const ProductAdvancedView = (props) => {
  let history = useHistory()
  let location = useLocation()

  const firstElement = config[props.route].item

  const editPages = config[location.pathname].editRoute

  const DropdownList = (
    <Container>
      <DropdownItem divider>
        <Typography>{firstElement}</Typography>
      </DropdownItem>
      <DropdownItem onClick={() => history.push(editPages)} divider>
        <Typography>Edit</Typography>
      </DropdownItem>
      <DropdownItem divider danger>
        <Typography>Delete</Typography>
      </DropdownItem>
    </Container>
  )

  return (
    <Container>
      <Row h="center">
        <Col>
          <Row h="between" display="flex" mb={2}>
            <Col cw="8">
              <Typography variant="h5">{props.name || 'No name'}</Typography>
            </Col>
            <Col cw="auto">
              <Dropdown overlay={DropdownList}>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Dropdown>
            </Col>
          </Row>
          <Row mb={4}>
            <Col>
              <Typography variant="body1">
                {props.description || 'No description.'}
              </Typography>
            </Col>
          </Row>
          <MeasureSimpleView
            productNumber={props.number}
            text={props.measure}
          />
          <CategorySimpleView />
          <Row display="flex" h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Price</Typography>
            </Col>
            <Col display="flex" cw="auto">
              <Typography>{props.price || 'None'}</Typography>
              <Typography>
                {(props.currency && <CurrencySimpleView />) || 'currency'}
              </Typography>
            </Col>
          </Row>
          <Row h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Assigned user</Typography>
            </Col>
            <Col cw="auto">
              <Typography>{props.assignedUser || 'None'}</Typography>
            </Col>
          </Row>
          {props.route === ROUTES_PATHS.CART_SHOW ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Purchased</Typography>
              </Col>
              <Col cw="auto">
                <Typography>
                  {props.purchasedDate
                    ? moment(props.purchasedDate).format('MMM Do')
                    : 'None'}
                </Typography>
              </Col>
            </Row>
          ) : props.route === ROUTES_PATHS.WISHES_SHOW ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Reminder date</Typography>
              </Col>
              <Col cw="auto">
                <Typography>
                  {moment(props.reminderDate).format('MMM Do')}
                </Typography>
              </Col>
            </Row>
          ) : (
            <Row mb={4}>
              <Col>
                <ProgressBar value={props.categoryBalance} />
              </Col>
            </Row>
          )}
          <CommentList />
        </Col>
      </Row>
    </Container>
  )
}

ProductAdvancedView.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  measure: PropTypes.string,
  puchasedDate: PropTypes.number,
  categoryBalance: PropTypes.number.isRequired,
  reminderDate: PropTypes.number,
  assignedUser: PropTypes.string,
  route: PropTypes.string.isRequired
}

export default ProductAdvancedView
