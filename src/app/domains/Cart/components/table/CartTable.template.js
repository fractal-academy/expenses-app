import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, IconButton, Checkbox, Toolbar } from '@material-ui/core/'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableSortLabel
} from '@material-ui/core/'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'

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
  createData('Ruslan', 'Lena', 'Waffles', 'Kitchen')
]

function createData(assignedUser, member, productName, productCategory) {
  return { assignedUser, member, productName, productCategory }
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  tableRow: {
    backgroundColor: '#F8F9F9'
  }
})

const CartTable = (props) => {
  const classes = useStyles(props)
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('productName')
  const [selectedCheckbox, setSelectedCheckbox] = useState([])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelectedCheckbox(newSelecteds)
      return
    }
    setSelectedCheckbox([])
  }

  return (
    <Box className="container-fluid">
      <Box className="row">
        <Box className="col-auto">
          <Toolbar>
            {props.checkboxChecked ? (
              <Box
                className={classes.root}
                display="flex"
                justifyContent="flex-end">
                <IconButton aria-label="check" color="primary">
                  <CheckIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary">
                  <DeleteIcon />
                </IconButton>
              </Box>
            ) : (
              <Box
                className={classes.root}
                display="flex"
                justifyContent="space-around">
                <Button color="primary">Wishes</Button>
                <Button color="primary">Cart</Button>
              </Box>
            )}
          </Toolbar>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell padding="none">
                    <Checkbox color="primary" />
                  </TableCell>
                  {headCells.map((headCell) => (
                    <TableCell align="center" key={headCell.id} padding="none">
                      <TableSortLabel>{headCell.label}</TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell padding="none">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell align="center">{props.assignedUser}</TableCell>
                  <TableCell align="center">{props.member}</TableCell>
                  <TableCell align="center">{props.productName}</TableCell>
                  <TableCell align="center">{props.productCategory}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

CartTable.propTypes = {
  productName: PropTypes.string.isRequired,
  productCategory: PropTypes.string,
  member: PropTypes.string.isRequired,
  assignedUser: PropTypes.string
}
CartTable.defaultProps = {}

export default CartTable
