import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import { Select } from 'components/Lib'
import { CURRENCIES } from 'app/constants'

const { CURRENCY_VALUES } = CURRENCIES

const CurrencySingleSelect = (props) => {
  return (
    <Select data={CURRENCY_VALUES} value={CURRENCY_VALUES[0]} {...props}>
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
