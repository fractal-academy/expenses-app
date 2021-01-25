import { Select, FormControl, InputLabel } from '@material-ui/core'
import { useState } from 'react'

const MeasureSingleSelect = (props) => {
  const [state, setState] = useState('')

  const handleChange = (event) => {
    // console.log(event.target.value)
    setState(event.target.text)
  }
  return (
    <>
      <FormControl size="large">
        <InputLabel htmlFor="age-native-simple">Measure</InputLabel>
        <Select native value={state} onChange={handleChange} name="measure">
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </>
  )
}

MeasureSingleSelect.propTypes = {}
MeasureSingleSelect.defaultProps = {}

export default MeasureSingleSelect
