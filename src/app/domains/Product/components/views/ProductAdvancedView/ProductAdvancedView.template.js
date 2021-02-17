import moment from 'moment'
import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from './ProductAdvancedView.styles'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Typography, IconButton } from '@material-ui/core'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import {
  deleteData,
  setData,
  getData,
  getTimestamp
} from 'app/services/Firestore'
import { useSession } from 'app/context/SessionContext'
import { Dropdown, DropdownItem, Confirmation } from 'app/components/Lib'
import { MeasureSimpleView } from 'domains/Measure/components/views'
import { CategorySimpleView } from 'domains/Category/components/views'
import { CurrencySimpleView } from 'domains/Currency/components/views'
import { CommentListWithAdd } from 'app/domains/Comment/components/combined/list'
import { WalletCombinedWithSelect } from 'app/domains/Wallet/components/combined/'
import { COLLECTIONS } from 'app/constants'

const ProductAdvancedView = (props) => {
  const productTypeMap = {
    cart: {
      item: 'Buy',
      path: ROUTES_PATHS.CART_ALL,
      editRoute: (id) => `${ROUTES_PATHS.CART_ALL}/${id}/edit`,
      actionCollection: 'purchases',
      collection: 'cart',
      displayElements: true,
      wrapperForItem: WalletCombinedWithSelect,
      functionForItem: handleMoveProductToPurchase,
      prevFunctionForItem: onCheckClick
    },
    wish: {
      item: 'Approve',
      path: ROUTES_PATHS.WISHES_ALL,
      editRoute: (id) => `${ROUTES_PATHS.WISHES_ALL}/${id}/edit`,
      actionCollection: 'cart',
      collection: 'wishes',
      displayElements: true,
      wrapperForItem: Box,
      functionForItem: handleMoveProductToCart
    },

    product: {
      item: 'Get QR',
      path: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
      editRoute: (id) => `${ROUTES_PATHS.REGULAR_PRODUCTS_ALL}/${id}/edit`,
      actionCollection: '',
      collection: 'regularProducts',
      displayElements: true,
      wrapperForItem: Fragment
    },

    purchase: {
      item: '',
      path: ROUTES_PATHS.PURCHASE_ALL,
      editRoute: (id) => `${ROUTES_PATHS.PURCHASE_ALL}/${id}/edit`,
      actionCollection: '',
      collection: 'purchases',
      displayElements: false,
      wrapperForItem: Fragment
    }
  }

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
  const handleDelete = async () => {
    try {
      setDeleteLoading(true)
      await deleteData(productCollection, id)
      history.goBack()
      setStatusMessage({
        open: true,
        message: 'Product was successfully deleted.',
        type: 'success'
      })
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
    setDeleteLoading(false)
  }

  function onCheckClick() {
    let status = true
    //required fields
    const fields = ['name', 'price', 'quantity']
    for (let field of fields) {
      /*   if required field isn`t empty status will be true  */

      status = !!(data[field] && status)
    }
    return !status
  }

  async function handleMoveProductToPurchase(wallet) {
    try {
      /*
      get data about current product */
      const product = await getData(COLLECTIONS.CART, id)
      /*
       set product to collection purchase  with additional fields (info about user)*/
      await setData(COLLECTIONS.PURCHASES, id, {
        ...product,
        assign: userName,
        avatarURL: user.avatarURL,
        wallet: wallet.nameWallet,
        privateWallet: wallet.privateWallet,
        dateBuy: data.dateBuy ? data.dateBuy : getTimestamp().now()
      })

      /*
        set new balance to wallet*/
      await setData(COLLECTIONS.WALLETS, wallet.id, {
        balance: wallet.balance - product.price * product.quantity
      })
      setStatusMessage({
        open: true,
        message: `Product was bought`,
        type: 'success'
      })
      /*
        delete current product from collection card */
      await deleteData(COLLECTIONS.CART, id)
      history.goBack()
    } catch (error) {
      setStatusMessage({ open: true, message: error, type: 'error' })
    }
    return true
  }
  async function handleMoveProductToCart() {
    try {
      await setData(actionCollection, id, data)
      handleDelete()
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
  const userName = `${user.firstName} ${user.surname}`
  const handleMoveProduct = productTypeMap[type].functionForItem
  const WrapperForItem = productTypeMap[type].wrapperForItem
  const prevFunctionForItem = productTypeMap[type].prevFunctionForItem

  const DropdownList = (
    <Container>
      {user.role !== 'user' && typeof firstElement !== 'string' ? (
        firstElement && firstElement
      ) : (
        <WrapperForItem
          setStatusMessage={setStatusMessage}
          onSubmitFunction={handleMoveProduct}
          onClick={
            prevFunctionForItem ? prevFunctionForItem : handleMoveProduct
          }>
          <DropdownItem divider>
            <Typography>{firstElement}</Typography>
          </DropdownItem>
        </WrapperForItem>
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
  assignedUser: PropTypes.string
  //type: PropTypes.oneOf(Object.keys(productTypeMap)).isRequired
}

export default ProductAdvancedView
