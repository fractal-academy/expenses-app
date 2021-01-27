import { React } from 'react'
import PropTypes from 'prop-types'
import styles from './TableHead.styles'
import { TABLE_CELLS } from 'app/constants'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Row, Col } from '@qonsoll/react-design'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Checkbox
} from '@material-ui/core/'

const COLLECTIONS = ['wishes', 'cart']
const useStyles = makeStyles(styles)

const CustomTableHead = (props) => {
  const classes = useStyles(props)
  const cells =
    props.page === 'cart' ? TABLE_CELLS.CART_CELLS : TABLE_CELLS.WISH_CELLS
  return (
    <Container>
      <Row>
        <Col cw="12">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              {cells.map((cell) => (
                <TableCell
                  align="left"
                  padding="none"
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
  page: PropTypes.oneOf(COLLECTIONS)
}
export default CustomTableHead
