import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { COLORS } from 'app/constants'
import styles from './ColorSimpleView.styles'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(styles)

const ColorSimpleView = ({ children, color }) => {
  const { COLOR } = COLORS

  const classes = useStyles()

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
