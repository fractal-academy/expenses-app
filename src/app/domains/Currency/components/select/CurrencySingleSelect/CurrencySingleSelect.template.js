import { useState } from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { currency } from 'app/constants'

const { CURRENCY, CURRENCY_KEYS } = currency

const CurrencySingleSelect = (props) => {
  const { menuItemProps, onChange, ...rest } = props
  const [currencySign, setCurrencySign] = useState(CURRENCY.UAH.cc)
  const handleSelect = (event) => {
    const selectedCurrency = event.target.value
    setCurrencySign(selectedCurrency)
    onChange && onChange(event, CURRENCY[selectedCurrency])
  }
  return (
    <Select
      value={currencySign}
      defaultValue={currencySign}
      onChange={handleSelect}
      {...rest}>
      {CURRENCY_KEYS.map((item) => (
        <MenuItem {...menuItemProps} value={CURRENCY[item].cc}>
          {CURRENCY[item].sign}
        </MenuItem>
      ))}
    </Select>
  )
}

CurrencySingleSelect.propTypes = {
  menuItemProps: PropTypes.shape({
    dense: PropTypes.bool
  })
}
CurrencySingleSelect.defaultProps = {
  menuItemProps: {
    dense: true
  }
}

export default CurrencySingleSelect
