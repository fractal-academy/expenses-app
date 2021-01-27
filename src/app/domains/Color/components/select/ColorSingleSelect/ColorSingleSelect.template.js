import { useState } from 'react'
import { MenuItem, Select } from '@material-ui/core'
import styles from './ColorSingleSelect.styles'
import { makeStyles } from '@material-ui/core/styles'
import { COLORS } from 'app/constants'

const useStyles = makeStyles(styles)

const ColorSingleSelect = (props) => {
  const classes = useStyles()

  const { COLOR_VALUE } = COLORS

  const [color, setColor] = useState(COLOR_VALUE[0].name)

  return (
    <Select className={classes.selectColor} value={color}>
      {COLOR_VALUE.map((colorItem) => (
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
