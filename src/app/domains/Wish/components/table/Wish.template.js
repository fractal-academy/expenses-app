import PropTypes from 'prop-types'
import { React, useState } from 'react'
import { Toolbar, DataGrid } from 'components'
import { Container, Row, Col } from '@qonsoll/react-design'

const WishTable = (props) => {
  const [numSelected, setNumSelected] = useState([])
  return (
    <Container>
      <Row h="center">
        <Col>
          <Toolbar numSelected={numSelected} />
          <DataGrid collection="wishes" setNumSelected={setNumSelected} />
        </Col>
      </Row>
    </Container>
  )
}

WishTable.propTypes = {
  number: PropTypes.number.isRequired
}

export default WishTable
