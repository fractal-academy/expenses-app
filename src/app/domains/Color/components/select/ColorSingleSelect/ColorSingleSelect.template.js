import { useState } from 'react'
import { MenuItem, Select } from '@material-ui/core'
import styles from './ColorSingleSelect.styles'
import { makeStyles } from '@material-ui/core/styles'
import { COLORS_VALUE } from 'app/constants'

const useStyles = makeStyles(styles)

const ColorSingleSelect = (props) => {
  const classes = useStyles()

  const [color, setColor] = useState(COLORS_VALUE[0].name)
  return (
    <Select className={classes.selectColor} value={color}>
      {COLORS_VALUE.map((colorItem) => (
        <MenuItem
          value={colorItem.name}
          style={{ backgroundColor: `${colorItem.color}` }}
          key={colorItem.name}
          onClick={() => setColor(colorItem.name)}>
          {colorItem.name}
        </MenuItem>
      ))}
    </Select>
  )
}

ColorSingleSelect.propTypes = {}

export default ColorSingleSelect
