import moment from 'moment'
import PropTypes from 'prop-types'
import { deleteData, firestore, setData, addData } from 'app/services/Firestore'
import { useHistory, useParams } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ProgressBar, Dropdown, DropdownItem } from 'components/Lib'
import { MeasureSimpleView } from 'domains/Measure/components/views/MeasureSimpleView'
import { CommentList } from 'domains/Comment/components/list/CommentList'
import { CategorySimpleView } from 'domains/Category/components/views/CategorySimpleView'
import { CurrencySimpleView } from 'domains/Currency/components/views/CurrencySimpleView'
import { ROUTES_PATHS, COLLECTIONS } from 'app/constants'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const productTypeMap = {
  cart: {
    item: 'Buy',
    editRoute: (id) => `${ROUTES_PATHS.CART_ALL}/${id}/edit`,
    actionCollection: 'purchases',
    collection: 'cart',
    displayElements: true
  },
  wish: {
    item: 'Approve',
    editRoute: (id) => `${ROUTES_PATHS.WISHES_ALL}/${id}/edit`,
    actionCollection: 'cart',
    collection: 'wishes',
    displayElements: true
  },

  product: {
    item: 'Get QR',
    editRoute: (id) => `${ROUTES_PATHS.REGULAR_PRODUCTS_ALL}/${id}/edit`,
    actionCollection: '',
    collection: 'regularProduct',
    displayElements: true
  },

  purchase: {
    item: '',
    editRoute: '',
    actionCollection: '',
    collection: 'purchases',
    displayElements: false
  }
}

const ProductAdvancedView = (props) => {
  const { type, data } = props

  const { id } = useParams()

  const history = useHistory()

  const reminderDate = moment(props.reminderDate).format('MMM Do')
  const purchasedDate = moment(data?.dateBuy).format('MMM Do')

  const handleDelete = () => {
    deleteData(productCollection, id).then(() => history.goBack())
  }
  const handleMoveProduct = () => {
    setData(actionCollection, id, data)
      .then(() => handleDelete())
      .then(() => history.goBack())
  }

  const firstElement = productTypeMap[type].item
  const editPages = productTypeMap[type].editRoute(id)
  const displayElements = productTypeMap[type].displayElements
  const productCollection = productTypeMap[type].collection
  const editPath = editPages.replace(':id', id)
  const actionCollection = productTypeMap[type].actionCollection
  // const [data] = useDocumentData(
  //   firestore.collection(productCollection).doc(id)
  // )
  const DropdownList = (
    <Container>
      <DropdownItem onClick={handleMoveProduct} divider>
        <Typography>{firstElement}</Typography>
      </DropdownItem>
      <DropdownItem onClick={() => history.push(editPath)} divider>
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
            productNumber={data?.number}
            text={data?.measure}
          />
          <CategorySimpleView nameCategory={data.category} />
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
