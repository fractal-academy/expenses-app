import { useState } from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { CURRENCIES } from 'app/constants'

const { CURRENCY, CURRENCY_KEYS } = CURRENCIES

const CurrencySingleSelect = (props) => {
  const { itemProps } = props
  const [currencySign, setCurrencySign] = useState(CURRENCY.UAH.cc)
  const handleSelect = (event) => {
    setCurrencySign(event.target.value)
  }
  return (
    <Select
      value={currencySign}
      defaultValue={currencySign}
      onChange={handleSelect}>
      {CURRENCY_KEYS.map((item) => (
        <MenuItem {...itemProps} value={CURRENCY[item].cc}>
          {CURRENCY[item].sign}
        </MenuItem>
      ))}
    </Select>
  )
}

CurrencySingleSelect.propTypes = {
  itemProps: PropTypes.shape({
    dense: PropTypes.bool
  })
}
CurrencySingleSelect.defaultProps = {
  itemProps: {
    dense: true
  }
}

export default CurrencySingleSelect
