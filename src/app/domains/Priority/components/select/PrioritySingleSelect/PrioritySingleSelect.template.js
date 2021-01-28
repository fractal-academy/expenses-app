import { PRIORITIES } from 'app/constants'
import { Select } from 'app/components'
import MenuItem from '@material-ui/core/MenuItem'
import { useStyles } from './Select.style'

const PrioritySingleSelect = (props) => {
  const classes = useStyles()
  return (
    <Select data={PRIORITIES} value={PRIORITIES[0]} className={classes.root}>
      {(item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      )}
    </Select>
  )
}

export default PrioritySingleSelect
