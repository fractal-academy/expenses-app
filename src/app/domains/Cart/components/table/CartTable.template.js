import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Toolbar, DataGrid } from 'components/Lib'
import { Row, Col } from '@qonsoll/react-design'

const CartTable = (props) => {
  const [numSelected, setNumSelected] = useState([])
  return (
    <Row h="center">
      <Col>
        <Toolbar numSelected={numSelected} />
        <DataGrid
          collection={COLLECTIONS.CART}
          setNumSelected={setNumSelected}
        />
      </Col>
    </Row>
  )
}

CartTable.propTypes = {}

export default CartTable
