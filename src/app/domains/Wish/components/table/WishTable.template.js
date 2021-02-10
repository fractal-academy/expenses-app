import { Toolbar } from 'components/Lib'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
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

const WishTable = (props) => {
  let history = useHistory()
  const numSelected = 0

  function createData(assignedUser, productName, category) {
    return { assignedUser, productName, category }
  }

  const rows = [
    createData('Ruslan', 'Sugar', 'Kitchen'),
    createData('Ruslan', 'Sugar', 'Kitchen'),
    createData('Ruslan', 'Sugar', 'Kitchen'),
    createData('Ruslan', 'Total spicy tomato soup', 'Kitchen'),
    createData('Ruslan', 'Sugar', 'Kitchens')
  ]

  return (
    <Container>
      <Row h="center">
        <Col>
          <Toolbar type="wishes" numSelected={numSelected} />
          <Paper variant="outlined" elevation={0}>
            <TableContainer>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell align="center">Asigned</TableCell>
                    <TableCell align="center">Wish</TableCell>
                    <TableCell align="center">Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      {' '}
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() => history.push(ROUTES_PATHS.MEMBER_SHOW)}>
                        {row.assignedUser}
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() => history.push(ROUTES_PATHS.WISHES_SHOW)}>
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

WishTable.propTypes = {}

export default WishTable
