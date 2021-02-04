import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const RegularProductsTable = (props) => {
  const { products } = props

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
            <TableRow key={row.name}>
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
