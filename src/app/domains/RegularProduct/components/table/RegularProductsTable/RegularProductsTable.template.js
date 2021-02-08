import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from '../../../../../constants'

const RegularProductsTable = (props) => {
  const { products } = props
  let history = useHistory()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Asignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => history.push(ROUTES_PATHS.REGULAR_PRODUCT_SHOW)}>
              <TableCell align="center">{row.productName}</TableCell>
              <TableCell align="center">{row.categoryName}</TableCell>
              <TableCell align="center">{row.asignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RegularProductsTable
