import moment from 'moment'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from './ProductAdvancedView.styles'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'
import { deleteData, setData } from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import { Dropdown, DropdownItem, Confirmation } from 'app/components/Lib'
import { MeasureSimpleView } from 'domains/Measure/components/views'
import { CategorySimpleView } from 'domains/Category/components/views'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { CommentListWithAdd } from 'app/domains/Comment/components/combined/list'

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
    collection: 'regularProducts',
    displayElements: true
  },

  purchase: {
    item: '',
    path: ROUTES_PATHS.PURCHASE_ALL,
    editRoute: (id) => `${ROUTES_PATHS.PURCHASE_ALL}/${id}/edit`,
    actionCollection: '',
    collection: 'purchases',
    displayElements: false
  }
}

const ProductAdvancedView = (props) => {
  const { type, data, id, setStatusMessage, dropdownItem } = props
  // [ADDITIONAL_HOOKS]
  const history = useHistory()
  const user = useSession()
  const reminderDate = moment(props.reminderDate).format('MMM Do')
  const purchasedDate = moment(data?.dateBuy).format('MMM Do')
  const classes = useStyles()

  // [COMPONENT_STATE_HOOKS]
  const [confirm, setConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // [HELPER_FUNCTIONS]
  const handleDelete = () => {
    try {
      deleteData(productCollection, id).then(() => history.goBack())
      setStatusMessage({
        open: true,
        message: 'Product was successfully deleted.',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
  }
  const handleMoveProduct = () => {
    try {
      setData(actionCollection, id, data).then(() => handleDelete())
      setStatusMessage({
        open: true,
        message: `Product was successfully moved to ${actionCollection}`,
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
  }

  // [COMPUTED_PROPERTIES]
  const firstElement = dropdownItem || productTypeMap[type].item
  const editPages = productTypeMap[type].editRoute(id)
  const displayElements = productTypeMap[type].displayElements
  const productCollection = productTypeMap[type].collection
  const actionCollection = productTypeMap[type].actionCollection

  const DropdownList = (
    <Container>
      {user.role !== 'user' && typeof firstElement !== 'string' ? (
        firstElement && firstElement
      ) : (
        <DropdownItem onClick={handleMoveProduct} divider>
          <Typography>{firstElement}</Typography>
        </DropdownItem>
      )}

      <DropdownItem onClick={() => history.push(editPages)} divider>
        <Typography>Edit</Typography>
      </DropdownItem>
      <Confirmation
        action="Delete"
        text={'Do you want to delete product?'}
        open={confirm}
        setOpen={setConfirm}
        loading={deleteLoading}
        onConfirm={handleDelete}>
        <DropdownItem onClick={handleDelete} danger>
          <Typography>Delete</Typography>
        </DropdownItem>
      </Confirmation>
    </Container>
  )

  return (
    <Container>
      <Row h="center">
        <Col>
          <Row h="between" display="flex" ml={2} mb={2}>
            <Col cw="8" className={classes.limitWidth}>
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
          <Row h="between" v="center" mb={2}>
            <Col cw="auto">
              <Typography>Quantity</Typography>
            </Col>
            <Col cw="auto">
              <Typography>
                <MeasureSimpleView
                  productNumber={data?.quantity}
                  text={data?.measures?.measure}
                />
              </Typography>
            </Col>
          </Row>
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
              <Typography>{data?.firstName || 'None'}</Typography>
            </Col>
          </Row>
          {type === 'cart' ? (
            <Row h="between" mb={4}>
              <Col cw="auto">
                <Typography>Purchased date</Typography>
              </Col>
              <Col cw="auto">
                <Typography>{purchasedDate || 'None'}</Typography>
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
          {displayElements && <CommentListWithAdd />}
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
