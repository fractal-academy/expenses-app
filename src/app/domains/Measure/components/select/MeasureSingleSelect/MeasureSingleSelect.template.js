import { TextField, MenuItem } from '@material-ui/core'
import { useState } from 'react'

const MEASURES = ['kg', 'g', 'mm', 'cm', 'm']

const MeasureSingleSelect = (props) => {
  const { value, onChange } = props
  const [currentMeasure, setCurrentMeasure] = useState(value)
  return (
    <TextField
      select
      onChange={(e) => setCurrentMeasure(e.target.value)}
      value={currentMeasure}>
      {MEASURES.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  )
}

MeasureSingleSelect.propTypes = {}

export default MeasureSingleSelect
