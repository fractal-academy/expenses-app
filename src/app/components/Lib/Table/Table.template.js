import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Toolbar } from 'components/Lib'
import { useStyles } from './Table.styles'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS, TABLE_CELLS } from 'app/constants'
import { Container, Row, Col } from '@qonsoll/react-design'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox
} from '@material-ui/core'

const tableTypeMap = {
  cart: {
    multiselect: true,
    middleCell: TABLE_CELLS[1],
    productPath: ROUTES_PATHS.CART_SHOW
  },
  wishes: {
    multiselect: true,
    middleCell: TABLE_CELLS[0],
    productPath: ROUTES_PATHS.WISHES_SHOW
  },
  regular: {
    multiselect: false,
    middleCell: TABLE_CELLS[1],
    productPath: ROUTES_PATHS.REGULAR_PRODUCT_SHOW
  }
}

const CustomTable = (props) => {
  const { type, products, numSelected = 0 } = props

  // [ADDITIONAL_HOOKS]
  let history = useHistory()
  const classes = useStyles()

  // [COMPONENT_STATE_HOOKS]
  const [selected, setSelected] = useState([])

  // [HELPER_FUNCTIONS]
  const toggleSelect = (id, checked) => {
    setSelected(
      !checked ? [...selected.filter((i) => i !== id)] : [...selected, id]
    )
  }
  const selectAll = (checked) => {
    setSelected(checked ? products.map(({ id }) => id) : [])
  }

  // [COMPUTED_PROPERTIES]
  const multiselect = tableTypeMap[type].multiselect
  const middleCell = tableTypeMap[type].middleCell
  const productPath = tableTypeMap[type].productPath

  return (
    <Container>
      <Row h="center">
        <Col>
          {multiselect && <Toolbar type={type} numSelected={numSelected} />}
          <Paper variant="outlined" elevation={0}>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow className={classes.root}>
                    {multiselect && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={products.length === selected.length}
                          indeterminate={
                            products.length > selected.length &&
                            selected.length > 0
                          }
                          onChange={(event) => selectAll(event.target.checked)}
                        />
                      </TableCell>
                    )}
                    <TableCell align="center">Assigned</TableCell>
                    <TableCell align="center">{middleCell}</TableCell>
                    <TableCell align="center">Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <TableRow key={row.name}>
                      {multiselect && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={selected.includes(row.id)}
                            onChange={(event) =>
                              toggleSelect(row.id, event.target.checked)
                            }
                          />
                        </TableCell>
                      )}
                      <TableCell
                        align="center"
                        onClick={() => history.push(ROUTES_PATHS.MEMBER_SHOW)}>
                        {row.asignedUser}
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() => history.push(productPath)}>
                        {row.productName}
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() =>
                          history.push(ROUTES_PATHS.CATEGORIES_ALL)
                        }>
                        {row.category}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Col>
      </Row>
    </Container>
  )
}
CustomTable.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  numSelected: PropTypes.number
}
export default CustomTable
