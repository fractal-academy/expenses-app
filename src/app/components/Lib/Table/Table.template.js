import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from 'app/components/Lib'
import { useStyles } from './Table.styles'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS, TABLE_CELLS } from 'app/constants'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { CurrencySimpleView } from 'domains/Currency/components/views/CurrencySimpleView'

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
    tableCells: TABLE_CELLS.CART_CELLS,
    productPath: ROUTES_PATHS.CART_ALL,
    additionalInfo: false
  },
  wishes: {
    multiselect: true,
    tableCells: TABLE_CELLS.WISHES_CELLS,
    productPath: ROUTES_PATHS.WISHES_ALL,
    additionalInfo: false
  },
  regular: {
    multiselect: false,
    tableCells: TABLE_CELLS.REGULAR_PRODUCT_CELLS,
    productPath: ROUTES_PATHS.REGULAR_PRODUCTS_ALL,
    additionalInfo: false
  },
  purchase: {
    multiselect: false,
    tableCells: TABLE_CELLS.PURCHASES_CELLS,
    productPath: ROUTES_PATHS.PURCHASE_ALL,
    additionalInfo: true
  }
}

const CustomTable = (props) => {
  const { type, products, setStatusMessage, actions = true } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()
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
  let numSelected = selected.length
  const multiselect = tableTypeMap[type].multiselect
  const cells = tableTypeMap[type].tableCells
  const productPath = tableTypeMap[type].productPath
  const additionalInfo = tableTypeMap[type].additionalInfo

  return (
    <Container>
      <Row h="center">
        <Col>
          {actions && multiselect && (
            <Toolbar
              type={type}
              selectedItems={selected}
              numSelected={numSelected}
              setStatusMessage={setStatusMessage}
            />
          )}
          <Paper variant="outlined" elevation={0}>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow className={classes.root}>
                    {actions && multiselect && (
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
                    {cells.map((cell) => (
                      <TableCell align="center">{cell}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <TableRow key={row.id}>
                      {actions && multiselect && (
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
                      <TableCell align="center">
                        {row.assign || 'None'}
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() =>
                          history.push(`${productPath}/${row.id}`)
                        }>
                        <Box className={classes.newLine}>{row.name}</Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() =>
                          row.category &&
                          history.push(ROUTES_PATHS.CATEGORIES_ALL)
                        }>
                        {row.category || 'None'}
                      </TableCell>
                      {additionalInfo && (
                        <TableCell>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center">
                            {row.price || 'None'}
                            {row.price && <CurrencySimpleView />}
                          </Box>
                        </TableCell>
                      )}
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
  actions: PropTypes.bool,
  numSelected: PropTypes.number
}
export default CustomTable
