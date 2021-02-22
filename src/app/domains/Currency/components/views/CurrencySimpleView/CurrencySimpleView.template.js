import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { CURRENCIES } from 'app/constants'

const { CURRENCY, CURRENCY_KEYS } = CURRENCIES

const CurrencySimpleView = (props) => {
  const { type, value, ...textProps } = props

  const text = type.includes('sign') ? CURRENCY[value].sign : CURRENCY[value].cc

  return <Typography {...textProps}>{text}</Typography>
}

CurrencySimpleView.propTypes = {
  value: PropTypes.oneOf(CURRENCY_KEYS).isRequired,
  type: PropTypes.oneOf(['sign', 'cc'])
}
CurrencySimpleView.defaultProps = {
  type: 'sign',
  value: 'UAH'
}

export default CurrencySimpleView
