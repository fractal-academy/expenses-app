import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const MeasureSimpleView = (props) => {
  const { textProps, text } = props

  return <Typography {...textProps}>{text}</Typography>
}

MeasureSimpleView.propTypes = {
  textProps: PropTypes.object,
  text: PropTypes.string
}

export default MeasureSimpleView
