import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, TableHead } from 'components'
import { makeStyles } from '@material-ui/core/styles'
import { TableRow, TableCell, Checkbox, Table } from '@material-ui/core'
import { Container, Row, Col } from '@qonsoll/react-design'

function createData(assignedUser, member, productName, productCategory) {
  return { assignedUser, member, productName, productCategory }
}
const rows = [
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Lena', 'Waffles', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen')
]

const useStyles = makeStyles({
  root: {
    width: '75px',
    textAlign: 'center',
    padding: '6px'
  }
})

const CartTable = (props) => {
  const classes = useStyles(props)
  return (
    <Container mx="1">
      <Row h="center">
        <Col cw="auto">
          <Toolbar numberChecked={props.number} />
          <Table size="small">
            <TableHead page="CART" />
            <Container display="box">
              <Row>
                <Col>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell align="center" className={classes.root}>
                        {row.assignedUser}
                      </TableCell>
                      <TableCell align="center" className={classes.root}>
                        {row.member}
                      </TableCell>
                      <TableCell align="center" className={classes.root}>
                        {row.productName}
                      </TableCell>
                      <TableCell align="center" className={classes.root}>
                        {row.productCategory}
                      </TableCell>
                    </TableRow>
                  ))}
                </Col>
              </Row>
            </Container>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

CartTable.propTypes = {
  assignedUser: PropTypes.string,
  member: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productCategory: PropTypes.string,
  number: PropTypes.number.isRequired
}

export default CartTable
