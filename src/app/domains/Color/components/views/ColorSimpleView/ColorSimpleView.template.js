import { CardContent, Card } from '@material-ui/core'
import { COLORS } from 'app/constants'
import PropTypes from 'prop-types'
import { useStyles } from './ColorSimpleView.styles'

// COMPONENT CONSTANTS
const { COLOR } = COLORS

const ColorSimpleView = ({ children, color }) => {
  // [ADDITIONAL_HOOKS]
  const classes = useStyles()

  //TEMPLATE
  return (
    <Card
      className={classes.colorView}
      style={{ backgroundColor: COLOR[color].color }}
      variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  )
}

ColorSimpleView.propTypes = {
  color: PropTypes.string
}

export default ColorSimpleView
