import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

const testData = ['Office', 'Kitchen', 'Food', 'Other']
const CategorySingleSelect = (props) => {
  const { currentCategory } = props
  return (
    <Select data={testData} value={currentCategory}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

CategorySingleSelect.propTypes = {
  currentCategory: PropTypes.string.isRequired
}
CategorySingleSelect.defaultProps = { currentCategory: 'Other' }

export default CategorySingleSelect
