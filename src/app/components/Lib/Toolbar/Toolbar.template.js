import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from '@qonsoll/react-design'
import {
  Toolbar,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core/'

import { Check, Delete, Receipt, ShoppingCart } from '@material-ui/icons/'

const toolbarItems = [
  { path: ROUTES_PATHS.CART_ALL, icon: <ShoppingCart />, label: 'Cart' },
  { path: ROUTES_PATHS.WISHES_ALL, icon: <Receipt />, label: 'Wishes' }
]

const CustomToolbar = (props) => {
  const history = useHistory()
  const [value, setValue] = useState()

  const info = `${props.numSelected} selected`

  const onMenuChange = (event, newPage) => setValue(newPage)
  useEffect(() => {
    setValue(
      toolbarItems.findIndex((item) => item.path === history.location.pathname)
    )
  }, [history])

  return (
    <Container>
      <Row>
        <Col pr={0}>
          <Toolbar disableGutters>
            {props.numSelected > 0 ? (
              <Container>
                <Row h="right" v="center">
                  <Col pl={2}>
                    <Typography variant="button">{info}</Typography>
                  </Col>
                  <Col cw="auto">
                    <IconButton color="primary">
                      <Check />
                    </IconButton>
                    <IconButton color="primary">
                      <Delete />
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
  numSelected: PropTypes.number.isRequired
}
export default CustomToolbar
