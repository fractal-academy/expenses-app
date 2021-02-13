import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { firestore, deleteData } from 'app/services/Firestore'
import { Container, Row, Col } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {
  Toolbar,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core/'
import {
  Check,
  Delete,
  ReceiptRounded,
  StarBorderRounded
} from '@material-ui/icons/'

const toolbarItems = [
  { path: ROUTES_PATHS.CART_ALL, icon: <ReceiptRounded />, label: 'To buy' },
  {
    path: ROUTES_PATHS.WISHES_ALL,
    icon: <StarBorderRounded />,
    label: 'Wishes'
  }
]

const CustomToolbar = (props) => {
  const { type, numSelected, selectedItems } = props

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
  const handleMultipleMove = () => {
    selectedItems.map((item) => {})
  }
  const handleMultipleDelete = () => {
    selectedItems.map((item) => {
      deleteData(type, item)
    })
  }

  // [COMPUTED_PROPERTIES]
  const info = `${numSelected} selected`

  return (
    <Container>
      <Row>
        <Col pr={0}>
          <Toolbar disableGutters>
            {numSelected > 0 ? (
              <Container>
                <Row h="right" v="center">
                  <Col pl={2}>
                    <Typography variant="button">{info}</Typography>
                  </Col>
                  <Col cw="auto">
                    <IconButton color="primary">
                      <Check onClick={handleMultipleMove} />
                    </IconButton>
                    <IconButton color="primary">
                      <Delete onClick={handleMultipleDelete} />
                    </IconButton>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container display="box">
                <Row h="center">
                  <Col cw="auto">
                    <BottomNavigation
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
  numSelected: PropTypes.number.isRequired,
  selectedItems: PropTypes.array
}
export default CustomToolbar
