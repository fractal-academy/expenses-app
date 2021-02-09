import PropTypes from 'prop-types'
import { useState } from 'react'
import { ROUTES_PATHS } from 'app/constants'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './Toolbar.styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Row, Col } from '@qonsoll/react-design'
import { Tab, Tabs, Toolbar, IconButton, Typography } from '@material-ui/core/'

const CustomToolbar = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const info = `${props.numSelected} selected`
  const productRoute =
    location.pathname === ROUTES_PATHS.WISHES_ALL
      ? ROUTES_PATHS.WISHES_SHOW
      : location.pathname === ROUTES_PATHS.CART_ALL
      ? ROUTES_PATHS.CART_SHOW
      : ROUTES_PATHS.REGULAR_PRODUCT_SHOW
  const cartButton = location.pathname === ROUTES_PATHS.CART_ALL
  const wishesButton = location.pathname === ROUTES_PATHS.WISHES_ALL

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
                    {props.numSelected === 1 && (
                      <IconButton
                        color="primary"
                        onClick={() => history.push(productRoute)}>
                        <VisibilityIcon />
                      </IconButton>
                    )}
                    <IconButton color="primary">
                      <CheckIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container display="box">
                <Row h="center">
                  <Col cw="auto">
                    <Tabs indicatorColor="primary" textColor="primary">
                      <Tab
                        label="Cart"
                        className={cartButton && classes.root}
                        onClick={() => history.push(ROUTES_PATHS.CART_ALL)}
                      />
                      <Tab
                        label="Wishes"
                        className={wishesButton && classes.root}
                        onClick={() => history.push(ROUTES_PATHS.WISHES_ALL)}
                      />
                    </Tabs>
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
