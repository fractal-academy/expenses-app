import PropTypes from 'prop-types'
import { React } from 'react'
import { tableCells } from 'app/constants'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Row, Col } from '@qonsoll/react-design'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Checkbox
} from '@material-ui/core/'

const ROUTS = {
  cart: 'CART',
  wishes: 'WISHES'
}

const useStyles = makeStyles({
  root: {
    width: '75px',
    textAlign: 'center',
    padding: '6px'
  }
})

const CustomTableHead = (props) => {
  const classes = useStyles(props)
  const cells =
    props.page === ROUTS.cart ? tableCells.CART_CELLS : tableCells.WISH_CELLS
  return (
    <Container display="box">
      <Row>
        <Col cw="12">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              {cells.map((cell) => (
                <TableCell
                  align="center"
                  key={cell.id}
                  className={classes.root}>
                  <TableSortLabel>{cell.label}</TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Col>
      </Row>
    </Container>
  )
}
CustomTableHead.propTypes = {
  page: PropTypes.oneOf(['WISHES', 'CART'])
}
export default CustomTableHead
