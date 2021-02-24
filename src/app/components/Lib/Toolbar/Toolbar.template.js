import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { Confirmation } from 'components/Lib'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import {
  Toolbar,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'
import {
  Check,
  Delete,
  FaceRounded,
  ReceiptRounded,
  StarBorderRounded
} from '@material-ui/icons/'
import { useStyles } from './Toolbar.styles'

const toolbarItems = [
  {
    path: ROUTES_PATHS.PERSONAL_CART_ALL,
    icon: <FaceRounded />,
    label: 'Personal'
  },
  { path: ROUTES_PATHS.CART_ALL, icon: <ReceiptRounded />, label: 'To buy' },
  {
    path: ROUTES_PATHS.WISHES_ALL,
    icon: <StarBorderRounded />,
    label: 'Wishes'
  }
]

const CustomToolbar = (props) => {
  const {
    numRows,
    selectedItems,
    setSelected,
    handleDelete,
    handleMove,
    onCheckClick,
    confirm,
    setConfirm,
    deleteLoading,
    WrapperForCheck = Box,
    titleForWrapperForCheck
  } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [COMPONENT_STATE_HOOKS]
  const [value, setValue] = useState()

  // [HELPER_FUNCTIONS]
  const onMenuChange = (event, newPage) => setValue(newPage)
  useEffect(() => {
    setValue(
      toolbarItems.findIndex((item) => item.path === history.location.pathname)
    )
  }, [history])
  // [INTERFACE]
  const classes = useStyles(props)

  // [COMPUTED_PROPERTIES]
  let numSelected = selectedItems.length
  const info = `${numSelected} selected`
  return (
    <Container>
      <Row>
        <Col pr={0}>
          <Toolbar disableGutters>
            {numRows > 0 && numSelected > 0 ? (
              <Container>
                <Row h="right" v="center">
                  <Col pl={2}>
                    <Typography variant="button">{info}</Typography>
                  </Col>
                  <Col cw="auto">
                    <IconButton color="primary">
                      <WrapperForCheck
                        title={titleForWrapperForCheck}
                        onClick={() => onCheckClick(selectedItems, setSelected)}
                        onSubmitFunction={(data) =>
                          handleMove(data, selectedItems, setSelected)
                        }>
                        <Check />
                      </WrapperForCheck>
                    </IconButton>
                    <Confirmation
                      action="Delete"
                      text={'Do you want to delete this products?'}
                      open={confirm}
                      setOpen={setConfirm}
                      loading={deleteLoading}
                      onConfirm={() =>
                        handleDelete(selectedItems, setSelected)
                      }>
                      <IconButton color="primary">
                        <Delete />
                      </IconButton>
                    </Confirmation>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container display="box">
                <Row h="center">
                  <Col cw="auto">
                    <BottomNavigation
                      className={classes.bgc}
                      value={value}
                      onChange={onMenuChange}
                      showLabels>
                      {toolbarItems.map((menuItem) => (
                        <BottomNavigationAction
                          label={menuItem.label}
                          icon={menuItem.icon}
                          key={menuItem.label}
                          onClick={() => history.push(menuItem.path)}
                        />
                      ))}
                    </BottomNavigation>
                  </Col>
                </Row>
              </Container>
            )}
          </Toolbar>
        </Col>
      </Row>
    </Container>
  )
}
CustomToolbar.propTypes = {
  type: PropTypes.string,
  numRows: PropTypes.number,
  selectedItems: PropTypes.array
}
export default CustomToolbar
