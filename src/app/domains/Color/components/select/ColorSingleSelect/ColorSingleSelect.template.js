import { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

import { COLOR_VALUE } from '../../../../../constants'

const useStyles = makeStyles((theme) => ({
  selectColor: {
    minWidth: 120,
    textAlign: 'center'
  }
}))

const ColorSingleSelect = (props) => {
  const classes = useStyles()
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
ColorSingleSelect.defaultProps = {}

export default ColorSingleSelect
