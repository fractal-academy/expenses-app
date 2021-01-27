import PropTypes from 'prop-types'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import { Container, Row, Col } from '@qonsoll/react-design'
import { Button, Toolbar, IconButton, Typography } from '@material-ui/core/'

const CustomToolbar = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Toolbar>
            {props.numberChecked ? (
              <Container>
                <Row h="right" v="center">
                  <Col>
                    <Typography variant="button">
                      {`${props.numberChecked} selected`}
                    </Typography>
                  </Col>
                  <Col cw="auto">
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
                    <Button color="primary">Wishes</Button>
                    <Button color="primary">Cart</Button>
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
  numberChecked: PropTypes.number.isRequired
}
export default CustomToolbar
