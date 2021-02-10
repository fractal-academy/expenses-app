import moment from 'moment'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ProgressBar, Dropdown, DropdownItem } from 'components/Lib'
import { MeasureSimpleView } from 'domains/Measure/components/views/MeasureSimpleView'
import { CommentList } from 'domains/Comment/components/list/CommentList'
import { CategorySimpleView } from 'domains/Category/components/views/CategorySimpleView'
import { CurrencySimpleView } from 'domains/Currency/components/views/CurrencySimpleView'
import { ROUTES_PATHS } from 'app/constants'

const productTypeMap = {
  cart: {
    item: 'Buy',
    editRoute: ROUTES_PATHS.CART_EDIT,
    layout: (props) => (
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
    ),
    displayElements: true
  },
  wish: {
    item: 'Approve',
    editRoute: ROUTES_PATHS.WISHES_EDIT,
    layout: (props) => (
      <Row h="between" mb={4}>
        <Col>
          <ProgressBar value={props.categoryBalance || 0} />
        </Col>
      </Row>
    ),
    displayElements: true
  },

  product: {
    item: 'Get QR',
    editRoute: ROUTES_PATHS.REGULAR_PRODUCT_EDIT,
    layout: (props) => (
      <Row mb={4}>
        <Col cw="auto">
          <Typography>Reminder date</Typography>
        </Col>
        <Col cw="auto">
          <Typography>{moment(props.reminderDate).format('MMM Do')}</Typography>
        </Col>
      </Row>
    ),
    displayElements: true
  },

  purchase: {
    item: '',
    editRoute: '',
    layout: (props) => <></>,
    displayElements: false
  }
}

const ProductAdvancedView = (props) => {
  const {
    type,
    name,
    description,
    number,
    measure,
    price,
    currency,
    assignedUser
  } = props
  const history = useHistory()

  const firstElement = productTypeMap[type].item

  const editPages = productTypeMap[type].editRoute

  const ProductLayout = productTypeMap[type].layout

  const displayElements = productTypeMap[type].displayElements

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
              <Typography variant="h5">{name || 'No name'}</Typography>
            </Col>
            {displayElements && (
              <Col cw="auto">
                <Dropdown overlay={DropdownList}>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </Dropdown>
              </Col>
            )}
          </Row>
          <Row mb={4}>
            <Col>
              <Typography variant="body1">
                {description || 'No description.'}
              </Typography>
            </Col>
          </Row>
          <MeasureSimpleView productNumber={number} text={measure} />
          <CategorySimpleView />
          <Row display="flex" h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Price</Typography>
            </Col>
            <Col display="flex" cw="auto">
              <Typography>{price || 'None'}</Typography>
              <Typography>
                {(currency && <CurrencySimpleView />) || 'currency'}
              </Typography>
            </Col>
          </Row>
          <Row h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Assigned user</Typography>
            </Col>
            <Col cw="auto">
              <Typography>{assignedUser || 'None'}</Typography>
            </Col>
          </Row>
          <ProductLayout {...props} />
          {displayElements && <CommentList />}
        </Col>
      </Row>
    </Container>
  )
}

ProductAdvancedView.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  measure: PropTypes.string,
  purchasedDate: PropTypes.number,
  categoryBalance: PropTypes.number,
  reminderDate: PropTypes.number,
  assignedUser: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(productTypeMap)).isRequired
}

export default ProductAdvancedView
