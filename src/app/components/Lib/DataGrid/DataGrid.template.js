import { React } from 'react'
import PropTypes from 'prop-types'
import { DataGrid } from '@material-ui/data-grid'
import { COLLECTIONS, TABLE_CELLS } from 'app/constants'
import { Container, Row, Col } from '@qonsoll/react-design'

const rows = [
  {
    id: 1,
    assignedUser: 'Snow',
    productCategory: 'Kitchen',
    productName: 'Tomato soup'
  },
  {
    id: 2,
    assignedUser: 'Lannister',
    productCategory: 'Office',
    productName: 'Pen'
  },
  {
    id: 3,
    assignedUser: 'Lannister',
    productCategory: 'Office',
    productName: 'Pen'
  },
  {
    id: 4,
    assignedUser: 'Stark',
    productCategory: 'Other',
    productName: 'Turnichok'
  },
  {
    id: 5,
    assignedUser: 'Lannister',
    productCategory: 'Office',
    productName: 'Pen'
  }
]
//TODO delete mock data
const CustomDataGrid = (props) => {
  const cells =
    props.collection === COLLECTIONS.CART
      ? TABLE_CELLS.CART_CELLS
      : TABLE_CELLS.WISH_CELLS

  return (
    <Container>
      <Row>
        <Col>
          <DataGrid
            hideFooter
            autoHeight
            autoPageSize
            rows={rows}
            columns={cells}
            checkboxSelection
            disableColumnMenu
            onSelectionChange={(newSelection) => {
              props.setNumSelected &&
                props.setNumSelected(newSelection.rowIds.length)
            }}
            preventDefault
          />
        </Col>
      </Row>
    </Container>
  )
}
CustomDataGrid.propTypes = {
  collection: PropTypes.string.isRequired,
  setNumSelected: PropTypes.func.isRequired
}
export default CustomDataGrid
