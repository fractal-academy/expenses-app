import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from 'app/components/Lib'
import { useStyles } from './Table.styles'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS, TABLE_CELLS } from 'app/constants'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { MeasureSimpleView } from 'domains/Measure/components/views/MeasureSimpleView'
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
  const {
    type,
    products,
    handleDelete,
    WrapperForCheck,
    titleForWrapperForCheck,
    onCheckClick,
    handleMove,
    purchaseAssign,
    confirm,
    setConfirm,
    deleteLoading,
    actions = true
  } = props

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
  const numRows = products.length
  const multiselect = tableTypeMap[type].multiselect
  const cells = tableTypeMap[type].tableCells
  const productPath = tableTypeMap[type].productPath
  const additionalInfo = tableTypeMap[type].additionalInfo

  return (
    <Container my={2}>
      <Row h="center">
        <Col>
          {actions && multiselect && (
            <Toolbar
              numRows={numRows}
              selectedItems={selected}
              setSelected={setSelected}
              handleDelete={handleDelete}
              onCheckClick={onCheckClick}
              WrapperForCheck={WrapperForCheck}
              titleForWrapperForCheck={titleForWrapperForCheck}
              handleMove={handleMove}
              confirm={confirm}
              setConfirm={setConfirm}
              deleteLoading={deleteLoading}
            />
          )}
          {products.length > 0 ? (
            <Paper variant="outlined" square elevation={0}>
              <TableContainer>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow className={classes.root}>
                      {actions && multiselect && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={
                              products.length &&
                              products.length === selected.length
                            }
                            indeterminate={
                              products.length > selected.length &&
                              selected.length > 0
                            }
                            onChange={(event) =>
                              selectAll(event.target.checked)
                            }
                          />
                        </TableCell>
                      )}
                      {cells.map((cell) => (
                        <TableCell key={cell} align="center">
                          {cell}
                        </TableCell>
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
                        <TableCell
                          align="center"
                          onClick={() =>
                            history.push(`${productPath}/${row.id}`)
                          }>
                          <Box className={classes.newLine}>{row.name}</Box>
                        </TableCell>
                        <TableCell align="center">
                          {purchaseAssign
                            ? row.assign
                            : row.firstName || 'None'}
                        </TableCell>
                        {additionalInfo ? (
                          <>
                            <TableCell align="center">
                              <MeasureSimpleView
                                productNumber={row.quantity}
                                text={row.measures?.measure}
                                variant="body2"
                              />
                            </TableCell>
                            <TableCell>
                              <Box display="flex" justifyContent="center">
                                {row.price || 'None'}
                                {row.price && (
                                  <CurrencySimpleView
                                    variant="body2"
                                    value="UAH"
                                  />
                                )}
                              </Box>
                            </TableCell>
                          </>
                        ) : (
                          <TableCell
                            align="center"
                            onClick={() =>
                              row.category &&
                              history.push(ROUTES_PATHS.CATEGORIES_ALL)
                            }>
                            {row.category || 'None'}
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ) : (
            <Box mt={5}>
              <img
                src="/noData.svg"
                alt="no data"
                style={{ width: '100%', height: '220px' }}
              />
            </Box>
          )}
        </Col>
      </Row>
    </Container>
  )
}
CustomTable.propTypes = {
  type: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.bool
}
export default CustomTable
