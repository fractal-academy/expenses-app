import { React, useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Toolbar, DataGrid } from 'components'
import { Container, Row, Col } from '@qonsoll/react-design'

const CartTable = (props) => {
  const [numSelected, setNumSelected] = useState([])
  return (
    <Container>
      <Row h="center">
        <Col>
          <Toolbar numSelected={numSelected} />
          <DataGrid
            collection={COLLECTIONS.CART}
            setNumSelected={setNumSelected}
          />
        </Col>
      </Row>
    </Container>
  )
}

CartTable.propTypes = {}

export default CartTable
