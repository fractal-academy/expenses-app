import { Select } from 'app/components/Lib'
import { MenuItem } from '@material-ui/core'

const tmpData = ['Sugar', 'Tea', 'Candies']

const RegularProductSingleSelect = (props) => {
  return (
    <Select value={tmpData[0]} data={tmpData} {...props}>
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
