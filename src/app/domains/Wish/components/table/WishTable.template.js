import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Toolbar, DataGrid, FabButton } from 'components/Lib'
import { Container, Row, Col } from '@qonsoll/react-design'

const WishTable = (props) => {
  const [numSelected, setNumSelected] = useState([])
  return (
    <Container>
      <Row h="center">
        <Col>
          <Toolbar numSelected={numSelected} />
          <DataGrid
            collection={COLLECTIONS.WISHES}
            setNumSelected={setNumSelected}
          />
          <FabButton />
        </Col>
      </Row>
    </Container>
  )
}

WishTable.propTypes = {}

export default WishTable
