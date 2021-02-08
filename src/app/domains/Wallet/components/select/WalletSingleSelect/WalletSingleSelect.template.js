import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { WalletSimpleViewWithCurrency } from 'app/domains/Wallet/components/views'
import { useStyles } from './WalletSingleSelect.styles'

const WalletSingleSelect = (props) => {
  const classes = useStyles()

  const { data, value, ...rest } = props
  return data ? (
    <Select
      data={Object.values(data)}
      className={classes.root}
      value={data[value]}
      {...rest}>
      {(item) => (
        <MenuItem value={item} key={item.id}>
          <WalletSimpleViewWithCurrency
            nameWallet={item.nameWallet}
            balance={item.balance}
            currency={item.currency}
          />
        </MenuItem>
      )}
    </Select>
  ) : (
    <div>no data</div>
  )
}

WalletSingleSelect.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object
}

export default WalletSingleSelect
