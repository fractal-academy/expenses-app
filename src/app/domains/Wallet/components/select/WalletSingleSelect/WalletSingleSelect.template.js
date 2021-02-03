import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { WalletSimpleViewWithCurrency } from 'app/domains/Wallet/components/views'
import { useStyles } from './WalletSingleSelect.styles'

const data = [
  { nameWallet: 'Olena`s wallet', balance: '800', currency: 'USD' },
  { nameWallet: 'wallet', balance: '200', currency: 'USD' }
]

const WalletSingleSelect = (props) => {
  const classes = useStyles()

  return (
    <Select data={data} value={data[0]} className={classes.root} {...props}>
      {(item) => (
        <MenuItem value={item} key={item}>
          <WalletSimpleViewWithCurrency
            nameWallet={item.nameWallet}
            balance={item.balance}
            currency={item.currency}
          />
        </MenuItem>
      )}
    </Select>
  )
}

WalletSingleSelect.propTypes = {
  currentCategory: PropTypes.string.isRequired
}
WalletSingleSelect.defaultProps = { currentCategory: 'Other' }

export default WalletSingleSelect
