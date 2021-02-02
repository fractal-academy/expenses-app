import { Select } from 'components/Lib/Select'
import { MenuItem } from '@material-ui/core'

const tmpData = ['Sugar', 'Tea', 'Candies']

const RegularProductSingleSelect = (props) => {
  return (
    <Select value={tmpData[0]} data={tmpData}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

RegularProductSingleSelect.propTypes = {}
RegularProductSingleSelect.defaultProps = {}

export default RegularProductSingleSelect
