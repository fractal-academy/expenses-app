import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components'

const MEASURES = ['kg', 'g', 'mm', 'cm', 'm']

const MeasureSingleSelect = () => {
  return (
    <Select fullWidth data={MEASURES} value={MEASURES[0]}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

MeasureSingleSelect.propTypes = {}

export default MeasureSingleSelect
