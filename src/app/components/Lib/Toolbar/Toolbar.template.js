import PropTypes from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Row, Col } from '@qonsoll/react-design'
import { Button, Toolbar, IconButton, Typography } from '@material-ui/core/'

const CustomToolbar = (props) => {
  let history = useHistory()
  let location = useLocation()

  const info = `${props.numSelected} selected`
  const productRoute =
    location.pathname === ROUTES_PATHS.WISHES_ALL
      ? ROUTES_PATHS.WISHES_SHOW
      : location.pathname === ROUTES_PATHS.CART_ALL
      ? ROUTES_PATHS.CART_SHOW
      : ROUTES_PATHS.REGULAR_PRODUCT_SHOW

  return (
    <Container>
      <Row>
        <Col>
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
                    <Button
                      color="primary"
                      onClick={() => history.push(ROUTES_PATHS.WISHES_ALL)}>
                      Wishes
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => history.push(ROUTES_PATHS.CART_ALL)}>
                      Cart
                    </Button>
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
