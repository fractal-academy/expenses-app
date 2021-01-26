import { TextField, MenuItem } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const MeasureSingleSelect = (props) => {
  const { value, onChange } = props
  const [currentMeasure, setCurrentMeasure] = useState(value)
  const MEASURES = ['кг', 'г', 'л', 'мм', 'см', 'м']
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
