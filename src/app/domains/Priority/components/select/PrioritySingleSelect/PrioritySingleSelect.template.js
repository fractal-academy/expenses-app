import { PRIORITY } from 'app/constants'
import { Select } from 'app/components'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import styleSelect from './Select.style'

const useStyles = makeStyles(styleSelect)
const PrioritySingleSelect = (props) => {
  const classes = useStyles()
  return (
    <Select data={PRIORITY} value={PRIORITY[0]} className={classes.root}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

PrioritySingleSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array
}
PrioritySingleSelect.defaultProps = {}

export default PrioritySingleSelect
