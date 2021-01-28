import { TextField } from '@material-ui/core'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  const { value, onChange, data, children, className, ...rest } = props
  const [currentValue, setCurrentValue] = useState(value)

  const handleSelect = (event) => {
    const selectValue = event.target.value
    setCurrentValue(selectValue)
    onChange && onChange(event, data[selectValue])
  }
  //in children use your own template
  return (
    <TextField
      select
      className={className}
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
  data: PropTypes.array,
  children: PropTypes.func,
  className: PropTypes.object
}
Select.defaultProps = {
  data: ['Item', 'Item', 'Item', 'Item', 'Item']
}

export default Select
