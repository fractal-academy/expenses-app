import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { WalletSimpleViewWithCurrency } from 'app/domains/Wallet/components/views'
import { useStyles } from './WalletSingleSelect.styles'

const WalletSingleSelect = (props) => {
  const classes = useStyles()

  let { data, id, value, ...rest } = props
  id = value ? value : id

  return data ? (
    <Select
      data={Object.values(data)}
      className={classes.root}
      value={data[id]}
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
