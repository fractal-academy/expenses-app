import { useState } from 'react'
import { COLLECTIONS } from 'app/constants'
import { Row, Col } from '@qonsoll/react-design'
import { Toolbar, DataGrid, FabButton } from 'components/Lib'

const CartTable = (props) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const [numSelected, setNumSelected] = useState([])
  return (
    <Row h="center">
      <Col>
        <Toolbar numSelected={numSelected} />
        <DataGrid
          collection={COLLECTIONS.CART}
          setNumSelected={setNumSelected}
        />
        <FabButton onClick={handleClickOpen} />
      </Col>
    </Row>
  )
}

CartTable.propTypes = {}

export default CartTable
