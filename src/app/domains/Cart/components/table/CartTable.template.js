import React from 'react'
import {
  Box,
  Table,
  Button,
  Toolbar,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  TableContainer,
  makeStyles
} from '@material-ui/core/'

const headCells = [
  {
    id: 'assignedUser',
    numeric: false,
    disablePadding: false,
    label: 'Assigned'
  },
  { id: 'member', numeric: false, disablePadding: false, label: 'Member' },
  {
    id: 'productName',
    numeric: false,
    disablePadding: true,
    label: 'Product'
  },
  {
    id: 'productCategory',
    numeric: false,
    disablePadding: false,
    label: 'Category'
  }
]
const rows = [
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Lena', 'Waffles', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen'),
  createData('Ruslan', 'Rostik', 'Sugar', 'Kitchen')
]

function createData(assignedUser, member, productName, productCategory) {
  return { assignedUser, member, productName, productCategory }
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-around'
  }
})

const CartTable = (props) => {
  const classes = useStyles(props)

  return (
    <Box className="container-fluid">
      <Box className="row">
        <Box className="col-auto">
          <Toolbar>
            <Box className={classes.root} display="flex">
              <Button color="primary">Wishes</Button>
              <Button color="primary">Cart</Button>
            </Box>
          </Toolbar>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow
                  color="primary.main"
                  style={{ backgroundColor: '#90CA59' }}>
                  <TableCell padding="none">
                    <Checkbox color="primary" />
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell align="center" key={headCell.id} padding="none">
                      <TableSortLabel> {headCell.label}</TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell padding="none">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell align="right">{row.assignedUser}</TableCell>
                    <TableCell align="right">{row.member}</TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                    <TableCell align="right">{row.productCategory}</TableCell>
                  </TableRow>
                ))}
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

CartTable.propTypes = {}
CartTable.defaultProps = {}

export default CartTable
