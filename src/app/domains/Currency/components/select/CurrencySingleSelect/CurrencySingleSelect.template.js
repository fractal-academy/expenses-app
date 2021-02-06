import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import { Select } from 'components/Lib'
import { CURRENCIES } from 'app/constants'

const { CURRENCY_VALUES } = CURRENCIES

const CurrencySingleSelect = (props) => {
  const { value, ...rest } = props
  return (
    <Select
      data={CURRENCY_VALUES}
      value={value || CURRENCY_VALUES[0]}
      {...rest}>
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
