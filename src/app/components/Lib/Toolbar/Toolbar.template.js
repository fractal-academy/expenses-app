import PropTypes from 'prop-types'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import { Container, Row, Col } from '@qonsoll/react-design'
import {
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core/'

const Tolbar = (props) => {
  return (
    <Container display="box">
      <Row h={props.numberChecked <= 0 && 'center'}>
        <Col cw="auto">
          <Toolbar>
            {props.numberChecked > 0 ? (
              <Box display="flex" justifyContent="space-between">
                <Typography>{props.numberChecked + ' selected'}</Typography>
                <IconButton aria-label="check" color="primary">
                  <CheckIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary">
                  <DeleteIcon />
                </IconButton>
              </Box>
            ) : (
              <Box>
                <Button color="primary">Wishes</Button>
                <Button color="primary">Cart</Button>
              </Box>
            )}
          </Toolbar>
        </Col>
      </Row>
    </Container>
  )
}
Tolbar.propTypes = {
  numberChecked: PropTypes.number.isRequired
}
Tolbar.defaultProps = {}
export default Tolbar
