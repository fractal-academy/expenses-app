import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const Select = (props) => {
  const {
    value,
    onChange,
    data,
    children,
    className,
    inputProps,
    errorText,
    ...rest
  } = props
  const [currentValue, setCurrentValue] = useState(value)
  useEffect(() => onChange(value), [])
  const handleSelect = (event) => {
    const selectValue = event.target.value
    setCurrentValue(selectValue)
    onChange && onChange(event, selectValue)
  }
  useEffect(() => onChange(value), [])
  //in children use your own template
  return (
    <TextField
      select
      className={className}
      onChange={handleSelect}
      value={currentValue}
      helperText={errorText}
      {...inputProps}
      {...rest}>
      {data.map(children)}
    </TextField>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  data: PropTypes.array,
  children: PropTypes.func,
  className: PropTypes.string,
  rest: PropTypes.object
}
Select.defaultProps = {
  data: ['Item', 'Item', 'Item', 'Item', 'Item']
}

export default Select
