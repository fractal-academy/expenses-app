import { Select } from 'app/components/Lib'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { useStyles } from './WalletTypeSingleSelect.styles'
import { Typography } from '@material-ui/core'

const WalletTypeSingleSelect = (props) => {
  const classes = useStyles()

  const { data, value, ...rest } = props
  return data ? (
    <Select data={data} className={classes.root} value={data[value]} {...rest}>
      {(item) => (
        <MenuItem value={item} key={item.id}>
          <Typography>{item}</Typography>
        </MenuItem>
      )}
    </Select>
  ) : (
    <div>no data</div>
  )
}

WalletTypeSingleSelect.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object
}

export default WalletTypeSingleSelect
