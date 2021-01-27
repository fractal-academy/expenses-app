import { PRIORITY } from 'app/constants'
import { Select } from 'app/components'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

const PrioritySingleSelect = (props) => {
  console.log(PRIORITY)
  return (
    <Select data={PRIORITY} value={PRIORITY[0]} fullWidth>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

PrioritySingleSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array
}
PrioritySingleSelect.defaultProps = {}

export default PrioritySingleSelect
