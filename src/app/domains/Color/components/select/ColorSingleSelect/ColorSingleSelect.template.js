import { MenuItem } from '@material-ui/core'
import { Select } from 'app/components/Lib'
import { useStyles } from './ColorSingleSelect.styles'
import { COLORS } from 'app/constants'

const ColorSingleSelect = (props) => {
  const classes = useStyles()

  const { COLOR_VALUE } = COLORS
  return (
    <Select
      className={classes.selectColor}
      value={COLOR_VALUE[0].name}
      data={COLOR_VALUE}
      {...props}>
      {(item) => (
        <MenuItem
          value={item.name}
          key={item.name}
          style={{ backgroundColor: `${item.color}` }}>
          {item.name}
        </MenuItem>
      )}
    </Select>
  )
}

ColorSingleSelect.propTypes = {}

export default ColorSingleSelect
