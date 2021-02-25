import { Select } from 'app/components/Lib'
import { MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import { WalletSimpleViewWithCurrency } from 'app/domains/Wallet/components/views'
import { useStyles } from './WalletSingleSelect.styles'

const WalletSingleSelect = (props) => {
  // INTERFACE
  const { data, value, ...rest } = props

  // CUSTOM HOOKS
  const classes = useStyles()

  // TEMPLATE
  return (
    <Select
      entity="wallets"
      data={Object.values(data)}
      className={classes.root}
      value={data[value]}
      {...rest}>
      {(item) => (
        <MenuItem value={item} key={item.id}>
          <WalletSimpleViewWithCurrency
            nameWallet={item.nameWallet}
            balance={item.balance}
            currency={item.idCurrency}
          />
        </MenuItem>
      )}
    </Select>
  )
}

WalletSingleSelect.propTypes = {
  id: PropTypes.string
}

export default WalletSingleSelect
