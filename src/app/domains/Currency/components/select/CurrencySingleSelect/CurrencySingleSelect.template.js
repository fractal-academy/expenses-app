import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import { Select } from 'components/Lib'
import { CURRENCIES } from 'app/constants'

const { CURRENCY_VALUES, CURRENCY } = CURRENCIES

const CurrencySingleSelect = (props) => {
  return (
    <Select
      data={CURRENCY_VALUES}
      {...props}
      value={CURRENCY[props.value] || CURRENCY_VALUES[0]}>
      {(item) => (
        <MenuItem value={item} key={item.cc} dense>
          {item.sign}
        </MenuItem>
      )}
    </Select>
  )
}

CurrencySingleSelect.propTypes = {}

export default CurrencySingleSelect
