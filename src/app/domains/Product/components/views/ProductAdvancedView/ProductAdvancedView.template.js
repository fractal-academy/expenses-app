import moment from 'moment'
import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { deleteData, setData } from 'app/services/Firestore'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ProgressBar, Dropdown, DropdownItem } from 'components/Lib'
import { MeasureSimpleView } from 'domains/Measure/components/views/MeasureSimpleView'
import { CommentList } from 'domains/Comment/components/list/CommentList'
import { CategorySimpleView } from 'domains/Category/components/views/CategorySimpleView'
import { CurrencySimpleView } from 'domains/Currency/components/views/CurrencySimpleView'

const productTypeMap = {
  cart: {
    item: 'Buy',
    path: ROUTES_PATHS.CART_ALL,
    editRoute: (id) => `${ROUTES_PATHS.CART_ALL}/${id}/edit`,
    actionCollection: 'purchases',
    collection: 'cart',
    displayElements: true
  },
  wish: {
    item: 'Approve',
    path: ROUTES_PATHS.WISHES_ALL,
    editRoute: (id) => `${ROUTES_PATHS.WISHES_ALL}/${id}/edit`,
    actionCollection: 'cart',
    collection: 'wishes',
    displayElements: true
  },

  product: {
    item: 'Get QR',
    path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    editRoute: (id) => `${ROUTES_PATHS.REGULAR_PRODUCTS_ALL}/${id}/edit`,
    actionCollection: '',
    collection: 'regularProduct',
    displayElements: true
  },

  purchase: {
    item: '',
    path: ROUTES_PATHS.PURCHASE_ALL,
    editRoute: '',
    actionCollection: '',
    collection: 'purchases',
    displayElements: false
  }
}

const ProductAdvancedView = (props) => {
  const { type, data, id } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [HELPER_FUNCTIONS]
  const handleDelete = () => {
    deleteData(productCollection, id).then(() => history.goBack())
  }
  const handleMoveProduct = () => {
    setData(actionCollection, id, data)
      .then(() => handleDelete())
      .then(() => history.push('/cart'))
  }

  // [COMPUTED_PROPERTIES]
  const reminderDate = moment(props.reminderDate).format('MMM Do')
  const purchasedDate = moment(data?.dateBuy).format('MMM Do')
  const path = productTypeMap[type].path
  const firstElement = productTypeMap[type].item
  const editPages = productTypeMap[type].editRoute(id)
  const displayElements = productTypeMap[type].displayElements
  const productCollection = productTypeMap[type].collection
  const editPath = editPages.replace(':id', id)
  const actionCollection = productTypeMap[type].actionCollection

  const DropdownList = (
    <Container>
      <DropdownItem onClick={handleMoveProduct} divider>
        <Typography>{firstElement}</Typography>
      </DropdownItem>
      <DropdownItem onClick={() => history.push(editPages)} divider>
        <Typography>Edit</Typography>
      </DropdownItem>
      <DropdownItem onClick={handleDelete} danger>
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
              <Typography variant="h5">{data?.name || 'No name'}</Typography>
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
                {data?.description || 'No description.'}
              </Typography>
            </Col>
          </Row>
          <MeasureSimpleView
            productNumber={data?.quantity}
            text={data?.measure}
          />
          <CategorySimpleView nameCategory={data?.category} />
          {data?.price && (
            <Row display="flex" h="between" v="center" mb={2}>
              <Col cw="auto">
                <Typography>Price</Typography>
              </Col>
              <Col display="flex" cw="auto">
                <Typography>{data?.price}</Typography>
                <Typography>
                  {data?.currency && <CurrencySimpleView />}
                </Typography>
              </Col>
            </Row>
          )}
          <Row h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Assigned user</Typography>
            </Col>
            <Col cw="auto">
              <Typography>{data?.assign || 'None'}</Typography>
            </Col>
          </Row>
          {type === 'cart' ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Purchased</Typography>
              </Col>
              <Col cw="auto">
                <Typography>{purchasedDate || 'None'}</Typography>
              </Col>
            </Row>
          ) : type === 'wish' ? (
            <Row mb={4}>
              <Col>
                <ProgressBar value={props.categoryBalance} />
              </Col>
            </Row>
          ) : type === 'product' ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Reminder date</Typography>
              </Col>
              <Col cw="auto">
                <Typography>{reminderDate || 'None'}</Typography>
              </Col>
            </Row>
          ) : (
            <></>
          )}
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
