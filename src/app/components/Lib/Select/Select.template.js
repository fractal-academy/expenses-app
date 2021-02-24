import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TextField, Typography } from '@material-ui/core'
import { Spinner } from 'app/components/Lib'

const Select = (props) => {
  const {
    value,
    onChange,
    data,
    entity,
    loading,
    children,
    className,
    inputProps,
    errorText,
    ...rest
  } = props
  const [currentValue, setCurrentValue] = useState(value)
  useEffect(() => {
    onChange(value)
  }, [])

  const handleSelect = (event) => {
    const selectValue = event.target.value
    setCurrentValue(selectValue)
    onChange && onChange(selectValue)
  }
  if (loading) return <Spinner />

  //in children use your own template
  return Object.keys(data).length ? (
    <TextField
      select
      className={className}
      onChange={handleSelect}
      defaultValue={value}
      value={currentValue}
      helperText={errorText}
      {...inputProps}
      {...rest}>
      {data.map(children)}
    </TextField>
  ) : (
    <Typography>You don`t have any {entity}</Typography>
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
