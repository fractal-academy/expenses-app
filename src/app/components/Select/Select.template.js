import { TextField } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import styleSelect from './Select.style'

const useStyles = makeStyles(styleSelect)
const Select = (props) => {
  const classes = useStyles()
  const { value, onChange, data, children, ...rest } = props

  const [currentValue, setCurrentValue] = useState(value)

  const handleSelect = (event) => {
    const selectValue = event.target.value
    setCurrentValue(selectValue)
    onChange && onChange(event, data[selectValue])
  }
  return (
    <TextField
      select
      className={classes.root}
      onChange={handleSelect}
      value={currentValue}
      {...rest}>
      {data.map(children)}
    </TextField>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array
}
Select.defaultProps = {
  data: ['Item', 'Item', 'Item', 'Item', 'Item']
}

export default Select
