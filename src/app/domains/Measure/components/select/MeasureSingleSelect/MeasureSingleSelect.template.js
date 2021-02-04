import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import PropTypes from 'prop-types'

const MEASURES = ['kg', 'g', 'mm', 'cm', 'm']

const MeasureSingleSelect = (props) => {
  const { currentMeasure } = props
  return (
    <Select data={MEASURES} value={currentMeasure} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

MeasureSingleSelect.propTypes = {
  currentMeasure: PropTypes.string.isRequired
}

export default MeasureSingleSelect
