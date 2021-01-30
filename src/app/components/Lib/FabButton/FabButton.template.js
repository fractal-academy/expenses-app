import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { useStyles } from './FabButton.style'

const FabButton = (props) => {
  const { onClick } = props
  const classes = useStyles()
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={onClick}
      className={classes.root}>
      <AddIcon />
    </Fab>
  )
}

FabButton.propTypes = {
  onClick: PropTypes.func
}

export default FabButton
