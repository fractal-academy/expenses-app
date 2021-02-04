import moment from 'moment'
import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ProgressBar, Dropdown, DropdownItem } from 'components/Lib'
import { MeasureSimpleView } from 'app/domains/Measure/components/views/MeasureSimpleView'
import { CommentList } from 'app/domains/Comment/components/list/CommentList'
import { CategorySimpleView } from 'app/domains/Category/components/views/CategorySimpleView'
import { CurrencySimpleView } from 'app/domains/Currency/components/views/CurrencySimpleView'

const DropdowItemsCart = ['Buy', 'Edit', 'Delete']
const DropdowItemsWishes = ['Approve', 'Edit', 'Delete']
const DropdowItemsRegprod = ['Get QR', 'Edit', 'Delete']

const DropdownCart = (
  <Container>
    {DropdowItemsCart.map((item) => (
      <DropdownItem divider>
        <Typography>{item}</Typography>
      </DropdownItem>
    ))}
  </Container>
)
const DropdownWishes = (
  <Container>
    {DropdowItemsWishes.map((item) => (
      <DropdownItem divider>
        <Typography>{item}</Typography>
      </DropdownItem>
    ))}
  </Container>
)
const DropdownRegprod = (
  <Container>
    {DropdowItemsRegprod.map((item) => (
      <DropdownItem divider>
        <Typography>{item}</Typography>
      </DropdownItem>
    ))}
  </Container>
)
const ProductAdvancedView = (props) => {
  const items =
    props.route === ROUTES_PATHS.CART_SHOW
      ? DropdownCart
      : props.route === ROUTES_PATHS.WISHES_SHOW
      ? DropdownWishes
      : DropdownRegprod

  return (
    <Container>
      <Row h="center">
        <Col>
          <Row h="between" display="flex" mb={2}>
            <Col cw="8">
              <Typography variant="h5">{props.name}</Typography>
            </Col>
            <Col cw="auto">
              <Dropdown overlay={items}>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Dropdown>
            </Col>
          </Row>
          <Row mb={4}>
            <Col>
              <Typography variant="body1">{props.description}</Typography>
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
              <Typography>{props.price}</Typography>
              <CurrencySimpleView />
            </Col>
          </Row>
          <Row h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Assigned user</Typography>
            </Col>
            <Col cw="auto">
              <Typography>{props.assignedUser}</Typography>
            </Col>
          </Row>
          {props.route === ROUTES_PATHS.CART_SHOW ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Purchased</Typography>
              </Col>
              <Col cw="auto">
                <Typography>
                  {moment(props.purchasedDate).format('MMM Do')}
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
  route: PropTypes.oneOf(['/cart/:id', '/wishes/:id', '/regularProducts/:id'])
}

export default ProductAdvancedView
